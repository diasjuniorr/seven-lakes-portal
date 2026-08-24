import { newsArticles } from '@/data/news';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { RelatedContent } from '@/components/municipal/related-content';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return (newsArticles ?? [])?.map((a: any) => ({ slug: a?.slug ?? '' }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = newsArticles?.find((a: any) => a?.slug === params?.slug);
  return { title: article?.title ?? 'News' };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles?.find((a: any) => a?.slug === params?.slug);
  if (!article) return notFound();

  return (
    <div>
      <MunicipalPageHeader
        title={article?.title ?? ''}
        subtitle={article?.summary}
        department={article?.department}
        lastUpdated={article?.publicationDate}
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div className="prose-municipal">
            <p>{article?.content}</p>
          </div>
          <aside>
            <RelatedContent
              title="Related News"
              items={(newsArticles ?? [])?.filter((a: any) => a?.slug !== params?.slug)?.slice(0, 3)?.map((a: any) => ({
                title: a?.title ?? '',
                href: `/news/${a?.slug}`,
                type: 'News',
              }))}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
