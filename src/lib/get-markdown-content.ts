// Temporarily disabled: Copy Markdown feature
// Needs to be refactored to client-side solution (read from static files or GitHub Raw)

export async function getMarkdownContent(slugs: string[]): Promise<string> {
  console.log("Copy Markdown disabled in static export mode", slugs);
  return "# Copy Markdown temporarily disabled";
}
