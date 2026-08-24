import Image from 'next/image';
import { Metadata } from 'next';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ThenAndNowComparison } from '@/components/municipal/then-and-now';
import { galleryComparisons, galleryItems } from '@/data/gallery';

export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryPage() {
  const hasContent = galleryItems.length > 0 || galleryComparisons.length > 0;
  return <div><MunicipalPageHeader title="Gallery" subtitle="Gameplay screenshots, district views and historical comparisons from Seven Lakes." /><div className="municipal-container py-10 space-y-12">{galleryItems.length > 0 && <section><h2 className="text-lg font-display font-semibold mb-5">Views from Seven Lakes</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{galleryItems.map((item) => <figure key={item.id} className="border border-border rounded-sm overflow-hidden bg-card"><div className="relative aspect-video bg-muted"><Image src={item.imageUrl} alt={item.title} fill className="object-cover" /></div><figcaption className="p-4"><h3 className="font-display font-semibold">{item.title}</h3>{item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}</figcaption></figure>)}</div></section>}{galleryComparisons.length > 0 && <section><h2 className="text-lg font-display font-semibold mb-5">Then &amp; Now</h2><div className="space-y-6 max-w-4xl">{galleryComparisons.map((comparison) => <ThenAndNowComparison key={comparison.id} comparison={comparison} />)}</div></section>}{!hasContent && <p className="text-sm text-muted-foreground max-w-2xl">No confirmed gameplay images have been added to the public gallery yet.</p>}</div></div>;
}
