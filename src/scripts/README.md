# Database Management

This directory contains database migrations for the portfolio project.

## Overview

**Supabase is the single source of truth** for all project data. The website fetches data directly from the Supabase database at runtime.

## Data Flow

```
Supabase Database → Server Actions (getProjects) → React Components
```

1. **Database**: All project data is stored in the `projects` table in Supabase
2. **Server Actions**: `src/app/admin/actions.ts` contains `getProjects()` which fetches from Supabase
3. **Components**: Pages and components receive project data as props from server-side fetching

## Database Schema

The `projects` table has the following structure:
- `id` (text, primary key)
- `title` (text)
- `description` (text)
- `category` (text)
- `rank` (text, nullable)
- `tech` (text[], array of strings)
- `links` (jsonb)
- `case_study` (jsonb) - contains `challenge`, `solution`, `learnings`
- `display_order` (integer)
- `is_hidden` (boolean)

## Updating Project Data

To update project information, you have two options:

### Option 1: Supabase Dashboard (Recommended)
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/spamrudtidjzviclpstn)
2. Navigate to Table Editor → `projects`
3. Edit the data directly in the UI
4. Changes are immediately reflected on your website

### Option 2: SQL Queries
Use the Supabase SQL Editor or the MCP server to run SQL queries:

```sql
UPDATE projects 
SET description = 'New description here'
WHERE id = 'project-id';
```

## Migrations

The `supabase/migrations/` directory contains SQL migrations that have been applied to your database:

- `seed_projects_function.sql` - Creates the `seed_projects()` function (used for initial data migration)

## Helper Functions

The `constants.tsx` file still contains helper functions for the UI:
- `getTechColor()` - Returns Tailwind classes for tech badge styling
- `getTechIconComponent()` - Returns SVG icon components for technologies
- `TECH_ICONS` - Icon definitions for various technologies
- `ICONS` - General UI icons

These are purely presentational and don't contain any project data.
