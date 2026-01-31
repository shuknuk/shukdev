-- Migration to seed projects data from constants.tsx
-- This bypasses RLS by using a function with SECURITY DEFINER

-- Create a function that can insert projects with elevated privileges
CREATE OR REPLACE FUNCTION seed_projects(projects_data jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Insert projects from the JSON data with proper type casting
  INSERT INTO projects (
    id,
    title,
    description,
    category,
    rank,
    tech,
    links,
    case_study,
    display_order,
    is_hidden
  )
  SELECT
    (value->>'id')::text,
    (value->>'title')::text,
    (value->>'description')::text,
    (value->>'category')::text,
    (value->>'rank')::text,
    -- Convert jsonb array to text array
    ARRAY(SELECT jsonb_array_elements_text(value->'tech')),
    (value->'links')::jsonb,
    (value->'caseStudy')::jsonb,
    (value->>'display_order')::integer,
    COALESCE((value->>'is_hidden')::boolean, false)
  FROM jsonb_array_elements(projects_data)
  ON CONFLICT (id) 
  DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    category = EXCLUDED.category,
    rank = EXCLUDED.rank,
    tech = EXCLUDED.tech,
    links = EXCLUDED.links,
    case_study = EXCLUDED.case_study,
    display_order = EXCLUDED.display_order,
    is_hidden = EXCLUDED.is_hidden;
END;
$$;

-- Grant execute permission to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION seed_projects(jsonb) TO authenticated;
GRANT EXECUTE ON FUNCTION seed_projects(jsonb) TO anon;
