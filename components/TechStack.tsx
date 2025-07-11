
import React from 'react';
import Badge from './ui/Badge';
import FadeInSection from './FadeInSection';

const languages = ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3'];
const tools = ['Next.js', 'Node.js', 'npm', 'pnpm', 'TailwindCSS', 'Figma', 'Git', 'GitHub', 'Warp', 'VS Code'];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-32">
      <FadeInSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">My Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((lang) => (
                  <Badge key={lang}>{lang}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">Frameworks & Tools</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default TechStack;
