import { publications } from '@/data/publications';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { MetadataList } from '@/components/municipal/metadata-list';
import { RelatedContent } from '@/components/municipal/related-content';
import { FileText, Download } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return (publications ?? [])?.map((p: any) => ({ slug: p?.slug ?? '' }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pub = publications?.find((p: any) => p?.slug === params?.slug);
  return { title: pub?.title ?? 'Publication' };
}

export default function PublicationPage({ params }: { params: { slug: string } }) {
  const pub = publications?.find((p: any) => p?.slug === params?.slug);
  if (!pub) return notFound();

  return (
    <div>
      <MunicipalPageHeader
        title={pub?.title ?? ''}
        subtitle={pub?.summary}
        department={pub?.department}
        lastUpdated={pub?.publicationDate}
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          <div>
            <div className="border border-border rounded-sm p-8 bg-card flex flex-col items-center justify-center mb-8">
              <FileText className="w-12 h-12 text-muted-foreground/30 mb-3" />
              <span className="text-sm text-muted-foreground mb-4">[Document preview]</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-sm cursor-not-allowed" aria-disabled="true">
                <Download className="w-4 h-4" />
                Document not yet available
              </span>
            </div>
            <div className="prose-municipal">
              <h2>Summary</h2>
              <p>{pub?.summary}</p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="border border-border rounded-sm p-5 bg-card">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Publication Details</h3>
              <MetadataList items={[
                { label: 'Title', value: pub?.title ?? '' },
                { label: 'Publishing Authority', value: pub?.publishingAuthority ?? '' },
                { label: 'Publication Date', value: pub?.publicationDate ?? '' },
                { label: 'Document Type', value: pub?.documentType ?? '' },
                { label: 'Department', value: pub?.department ?? '' },
              ]} />
            </div>
            <RelatedContent
              title="Related Publications"
              items={(publications ?? [])?.filter((p: any) => p?.slug !== params?.slug)?.slice(0, 3)?.map((p: any) => ({
                title: p?.title ?? '',
                href: `/publications/${p?.slug}`,
                type: 'Publication',
              }))}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
