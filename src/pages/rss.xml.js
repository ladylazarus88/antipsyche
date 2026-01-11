import rss from '@astrojs/rss';
import { config } from '../config';

export async function GET(context) {
  const posts = import.meta.glob(['../content/blog/*.md', '../content/blog/claudio/*.md'], { eager: true });
  const items = Object.entries(posts).map(([path, post]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return {
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.excerpt || post.frontmatter.description,
      link: `/blog/${slug}/`,
    };
  });
  
  // ... dopo const items = Object.entries(posts).map(...)

// === CODICE DI DEBUG ===
console.log(`Totale post trovati: ${items.length}`);
items.forEach((item, index) => {
  // Controlla i campi obbligatori
  if (!item.title && !item.description) {
    console.error(`❌ ERRORE RSS: L'item all'indice ${index} non ha né 'title' né 'description'.`);
    console.error(`   Dati problematici:`, item);
  }
  if (!item.link) console.warn(`⚠️  Item ${index} non ha 'link'`);
  if (!item.pubDate) console.warn(`⚠️  Item ${index} non ha 'pubDate'`);
});
// Filtra via gli oggetti non validi per permettere il debug
const validItems = items.filter(item => item.title || item.description);
console.log(`Item validi dopo il filtro: ${validItems.length}/${items.length}`);
// === FINE DEBUG ===

// Per testare, sostituisci temporaneamente `items` con `validItems`:
// return rss({ ... , items: validItems.sort(...) });

  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
    customData: `<language>en-us</language>`,
  });
}