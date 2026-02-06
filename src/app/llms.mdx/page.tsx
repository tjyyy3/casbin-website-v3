import { getLLMText, source } from '@/lib/source';

// Temporarily disabled: LLM text API needs to be refactored to client-side solution

export async function generateStaticParams() {
  const pages = source.getPages();
  return pages.map((page) => ({
    slug: page.slugs,
  }));
}

export default async function Page() {
  return (
    <div className="prose dark:prose-invert max-w-none p-8">
      <h1>LLM Integration</h1>
      <p>This feature is temporarily disabled in static export mode.</p>
      <p>Please use the &quot;Copy Markdown&quot; button on documentation pages instead.</p>
    </div>
  );
}
