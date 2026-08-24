import { Publication } from '@/types';
import { DocumentCard } from './document-card';

export function PublicationList({ publications }: { publications: Publication[] }) {
  return (
    <div>
      {(publications ?? [])?.map((pub: Publication) => (
        <DocumentCard key={pub?.id} publication={pub} />
      ))}
    </div>
  );
}
