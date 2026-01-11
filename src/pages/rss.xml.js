import rss from '@astrojs/rss';
import { config } from '../config';

export async function GET(context) {
  // 🔴 ERRATO: due pattern come argomenti separati
  // const posts = import.meta.glob('../content/blog/*.md', '../../content/blog/claudio/*.md', { eager: true });
  
  // ✅ CORRETTO: usa un array per i pattern
  const posts = import.meta.glob(
    [
      '../content/blog/*.md',
      '../content/blog/claudio/*.md',
      // Aggiungi anche .mdx se ne hai
      '../content/blog/*.mdx',
      '../content/blog/claudio/*.mdx'
    ], 
    { eager: true }
  );
  
  const items = Object.entries(posts).map(([path, post]) => {
    // Determina se è un post di Claudio
    const isClaudio = path.includes('/claudio/');
    
    // Crea slug univoco (stessa logica che usi in getStaticPaths)
    const filename = path.split('/').pop().replace(/\.(md|mdx)$/, '');
    const slug = isClaudio ? `claudio/${filename}` : filename;
    
    return {
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.excerpt || post.frontmatter.description,
      link: `/blog/${slug}/`,
      // Aggiungi info extra se vuoi
      author: post.frontmatter.editor || 'Autore',
      categories: post.frontmatter.categories || [],
      content: post.compiledContent || post.body || ''
    };
  });
  
  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
    customData: `<language>it-it</language>`, // Consiglio di usare it-it per il tuo sito
    // Aggiungi altri campi opzionali
    stylesheet: '/rss-style.xsl'
  });
}