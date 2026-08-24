import { GovernmentBody, Department, Meeting, Decision } from '@/types';

export const governmentBodies: GovernmentBody[] = [
  {
    id: '1',
    name: 'City Council',
    type: 'Legislative',
    description: '[Summary]',
    members: 0,
    chairperson: '[Office holder]',
    responsibilities: '[Summary]',
  },
  {
    id: '2',
    name: 'Executive Board',
    type: 'Executive',
    description: '[Summary]',
    members: 0,
    chairperson: '[Office holder]',
    responsibilities: '[Summary]',
  },
];

export const departments: Department[] = [
  {
    id: '1',
    name: '[Department name]',
    head: '[Office holder]',
    description: '[Summary]',
    responsibilities: ['[Responsibility]', '[Responsibility]', '[Responsibility]'],
  },
  {
    id: '2',
    name: '[Department name]',
    head: '[Office holder]',
    description: '[Summary]',
    responsibilities: ['[Responsibility]', '[Responsibility]'],
  },
  {
    id: '3',
    name: '[Department name]',
    head: '[Office holder]',
    description: '[Summary]',
    responsibilities: ['[Responsibility]', '[Responsibility]', '[Responsibility]'],
  },
];

export const meetings: Meeting[] = [
  { id: '1', body: 'City Council', date: '[Date]', agenda: '[Summary]', status: 'Scheduled' },
  { id: '2', body: 'Executive Board', date: '[Date]', agenda: '[Summary]', status: 'Completed' },
  { id: '3', body: 'City Council', date: '[Date]', agenda: '[Summary]', status: 'Completed' },
];

export const decisions: Decision[] = [
  { id: '1', title: '[Decision title]', body: 'City Council', date: '[Date]', status: 'Approved', reference: '[Reference]' },
  { id: '2', title: '[Decision title]', body: 'Executive Board', date: '[Date]', status: 'Pending', reference: '[Reference]' },
  { id: '3', title: '[Decision title]', body: 'City Council', date: '[Date]', status: 'Approved', reference: '[Reference]' },
];
