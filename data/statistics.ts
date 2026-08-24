import { Statistic, EnvironmentIndicator } from '@/types';

export const statistics: Statistic[] = [
  { id: '1', label: 'Population', value: '[Statistic]', unit: '', category: 'Demographics', source: '[Source]', year: '[Year]' },
  { id: '2', label: 'Area', value: '[Statistic]', unit: 'km²', category: 'Geography', source: '[Source]', year: '[Year]' },
  { id: '3', label: 'Population Density', value: '[Statistic]', unit: '/km²', category: 'Demographics', source: '[Source]', year: '[Year]' },
  { id: '4', label: 'Districts', value: '[Statistic]', unit: '', category: 'Administration', source: '[Source]', year: '[Year]' },
  { id: '5', label: 'Annual Budget', value: '[Statistic]', unit: '€', category: 'Municipal Finances', source: '[Source]', year: '[Year]' },
  { id: '6', label: 'Public Transportation Coverage', value: '[Statistic]', unit: '%', category: 'Transportation', source: '[Source]', year: '[Year]' },
  { id: '7', label: 'Green Space per Capita', value: '[Statistic]', unit: 'm²', category: 'Environment', source: '[Source]', year: '[Year]' },
  { id: '8', label: 'Housing Units', value: '[Statistic]', unit: '', category: 'Housing', source: '[Source]', year: '[Year]' },
];

export const environmentIndicators: EnvironmentIndicator[] = [
  { id: '1', label: 'Lake Water Quality Index', value: '[Statistic]', unit: '', trend: 'improving', category: 'Water', lastUpdated: '[Date]' },
  { id: '2', label: 'Air Quality Index', value: '[Statistic]', unit: 'AQI', trend: 'stable', category: 'Air', lastUpdated: '[Date]' },
  { id: '3', label: 'Forest Coverage', value: '[Statistic]', unit: '%', trend: 'stable', category: 'Biodiversity', lastUpdated: '[Date]' },
  { id: '4', label: 'Carbon Emissions', value: '[Statistic]', unit: 'tCO₂e', trend: 'declining', category: 'Emissions', lastUpdated: '[Date]' },
  { id: '5', label: 'Recycling Rate', value: '[Statistic]', unit: '%', trend: 'improving', category: 'Waste', lastUpdated: '[Date]' },
];
