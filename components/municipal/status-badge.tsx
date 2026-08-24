import { ProjectStatusType } from '@/types';

const statusConfig: Record<ProjectStatusType, { label: string; className: string }> = {
  proposed: { label: 'Proposed', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  planning: { label: 'Planning', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  approved: { label: 'Approved', className: 'bg-teal-50 text-teal-700 border-teal-200' },
  'in-progress': { label: 'In Progress', className: 'bg-orange-50 text-orange-700 border-orange-200' },
  completed: { label: 'Completed', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  suspended: { label: 'Suspended', className: 'bg-red-50 text-red-700 border-red-200' },
};

export function StatusBadge({ status }: { status: ProjectStatusType }) {
  const config = statusConfig?.[status] ?? statusConfig?.proposed;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-sm ${config?.className}`}>
      {config?.label}
    </span>
  );
}
