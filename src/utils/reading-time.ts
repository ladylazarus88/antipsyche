export function calculateReadingTime(text: string): string {
  // Average reading speed: 200 words per minute for technical content
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  if (minutes < 1) return 'Meno di 1 min';
  if (minutes === 1) return '1 min';
  return `${minutes} min`;
}

export function extractTextFromMarkdown(content: string): string {
  // Remove frontmatter
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '');
  
  // Remove code blocks
  const withoutCode = withoutFrontmatter.replace(/```[\s\S]*?```/g, '');
  
  // Remove inline code
  const withoutInlineCode = withoutCode.replace(/`[^`]*`/g, '');
  
  // Remove markdown syntax
  const plainText = withoutInlineCode
    .replace(/#{1,6}\s/g, '') // headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/[*_~]/g, '') // emphasis
    .replace(/>\s/g, '') // blockquotes
    .replace(/\|/g, ' '); // tables
  
  return plainText;
}