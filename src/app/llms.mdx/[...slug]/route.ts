import { getLLMText, source } from '@/lib/source';
import { NextRequest } from 'next/server';
import { notFound } from 'next/navigation';

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  // Get all documentation pages
  const pages = source.getPages();
  
  // Return all possible slug combinations
  return pages.map((page) => ({
    slug: page.slugs,
  }));
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

