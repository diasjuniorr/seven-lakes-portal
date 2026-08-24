interface MetadataItem {
  label: string;
  value: string;
}

interface MetadataListProps {
  items: MetadataItem[];
  columns?: 1 | 2;
}

export function MetadataList({ items, columns = 1 }: MetadataListProps) {
  return (
    <dl className={`${columns === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8' : ''}`}>
      {items?.map((item: MetadataItem, i: number) => (
        <div key={i} className="py-2.5 border-b border-border last:border-b-0 flex flex-col sm:flex-row sm:gap-4">
          <dt className="text-[13px] font-medium text-muted-foreground sm:w-40 shrink-0">{item?.label}</dt>
          <dd className="text-[13px] text-foreground">{item?.value}</dd>
        </div>
      ))}
    </dl>
  );
}
