import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { SearchInterface } from '@/components/municipal/search-interface';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Search' };

export default function SearchPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Search"
        subtitle="Search across all municipal records, projects, publications, and districts"
      />
      <div className="municipal-container py-10">
        <div className="max-w-3xl">
          <SearchInterface />
        </div>
      </div>
    </div>
  );
}
