interface DataTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        {caption && <caption className="text-left text-xs text-muted-foreground mb-2">{caption}</caption>}
        <thead>
          <tr>
            {headers?.map((h: string, i: number) => (
              <th key={i} className="text-left px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b-2 border-border">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: string[], ri: number) => (
            <tr key={ri} className="hover:bg-accent/50 transition-colors">
              {row?.map((cell: string, ci: number) => (
                <td key={ci} className="px-3 py-2.5 border-b border-border text-[13px]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
