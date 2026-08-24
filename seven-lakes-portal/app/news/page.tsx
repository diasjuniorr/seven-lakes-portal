import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { newsArticles } from '@/data/news';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'News & Updates' };

export default function NewsPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="News & Updates"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="max-w-3xl space-y-0">
          {(newsArticles ?? [])?.map((article: any) => (
            <Link key={article?.id} href={`/news/${article?.slug}`} className="block group">
              <div className="py-5 border-b border-border hover:bg-accent/30 px-4 -mx-4 transition-colors">
                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">{article?.title}</h3>
                <p className="text-[13px] text-muted-foreground mb-2">{article?.summary}</p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" /> {article?.publicationDate}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Tag className="w-3 h-3" /> {article?.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article?.department}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
