import Link from 'next/link';
import { ArrowRight, Landmark } from 'lucide-react';
import { districts } from '@/data/districts';
import { timeline } from '@/data/timeline';
import { projects } from '@/data/projects';
import { galleryItems } from '@/data/gallery';
import { DistrictCard } from '@/components/municipal/district-card';
import { ProjectCard } from '@/components/municipal/project-card';

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-xs text-primary hover:underline flex items-center gap-1">{children}<ArrowRight className="w-3 h-3" /></Link>;
}

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="municipal-container py-14 sm:py-20">
          <div className="max-w-2xl">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center mb-4"><Landmark className="w-5 h-5 text-primary-foreground" /></div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3">Seven Lakes Metropolitan Municipality</h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">A public record of the districts, history and changing landscape of the Seven Lakes region.</p>
          </div>
        </div>
      </section>

      <section className="page-section border-b border-border">
        <div className="municipal-container max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Latest update</p>
          <h2 className="text-xl font-display font-semibold mb-2">Kaksilahti district record</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">The first complete district profile traces Kaksilahti from its fishing and woodworking settlements to its place in modern Seven Lakes.</p>
          <SectionLink href="/districts/kaksilahti">Read the district record</SectionLink>
        </div>
      </section>

      <section className="page-section border-b border-border bg-card">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6"><h2 className="text-lg font-display font-semibold">Districts</h2><SectionLink href="/districts">All districts</SectionLink></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{districts.map((district) => <DistrictCard key={district.id} district={district} />)}</div>
        </div>
      </section>

      <section className="page-section border-b border-border">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6"><h2 className="text-lg font-display font-semibold">Timeline</h2><SectionLink href="/timeline">Full timeline</SectionLink></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{timeline.slice(0, 4).map((item) => <article key={item.id} className="border-l-2 border-primary pl-4 py-1"><p className="text-xs text-primary mb-1">{item.period}</p><h3 className="text-sm font-semibold mb-1">{item.title}</h3><p className="text-[13px] text-muted-foreground">{item.description}</p></article>)}</div>
        </div>
      </section>

      {projects.length > 0 && <section className="page-section border-b border-border bg-card"><div className="municipal-container"><div className="flex items-center justify-between mb-6"><h2 className="text-lg font-display font-semibold">Current Projects</h2><SectionLink href="/projects">All projects</SectionLink></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></section>}

      {galleryItems.length > 0 && <section className="page-section"><div className="municipal-container"><div className="flex items-center justify-between"><h2 className="text-lg font-display font-semibold">Gallery</h2><SectionLink href="/gallery">View gallery</SectionLink></div></div></section>}
    </div>
  );
}
