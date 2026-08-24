import { ArchiveRecord } from '@/types';
import { MetadataList } from './metadata-list';

export function ArchiveMetadata({ record }: { record: ArchiveRecord }) {
  const items = [
    { label: 'Record ID', value: record?.recordId ?? '' },
    { label: 'Title', value: record?.title ?? '' },
    { label: 'Date', value: record?.date ?? '' },
    { label: 'Period', value: record?.period ?? '' },
    { label: 'Record Type', value: record?.recordType ?? '' },
    { label: 'Creator', value: record?.creator ?? '' },
    { label: 'Source', value: record?.source ?? '' },
    { label: 'Collection', value: record?.collection ?? '' },
    { label: 'Location', value: record?.location ?? '' },
    { label: 'District', value: record?.district ?? '' },
    { label: 'Department', value: record?.department ?? '' },
    { label: 'Rights', value: record?.rights ?? '' },
    { label: 'Tags', value: (record?.tags ?? [])?.join(', ') },
  ];
  return <MetadataList items={items} />;
}
