import rss from '@astrojs/rss';
import { config } from '../config';

export async function GET(context) {
  const posts = import.meta.glob(
    ['../content/blog/quaderni/*.md', '../content/blog/contrappunti/*.md'],
    { eager: true }
  );

  const items = Object.entries(posts)
    .map(([path, post]) => {
      // 1. Estrai il frontmatter con valori di default sicuri
      const frontmatter = post.frontmatter || {};
      
      // 2. Costruisci l'oggetto RSS con controlli robusti
      //    Usa un titolo di fallback se manca
      const itemTitle = frontmatter.title || `Post: ${path.split('/').pop()}`;
      //    Usa la data di oggi se manca
      const itemDate = frontmatter.date ? new Date(frontmatter.date) : new Date();
      //    Crea una descrizione di fallback
      const itemDescription = frontmatter.excerpt || frontmatter.description || `Una recensione da ${path.includes('claudio') ? 'Claudio' : 'Antipsyche'}`;
      
      // 3. Calcola lo slug in modo sicuro (stessa logica di getStaticPaths)
      const isClaudio = path.includes('/claudio/');
      const filename = path.split('/').pop().replace(/\.md$/, '');
      const itemSlug = isClaudio ? `claudio/${filename}` : filename;
      
      // Ritorna SOLO se abbiamo i campi minimi
      if (!itemTitle && !itemDescription) {
        console.warn(`Skipping RSS item per file senza titolo/descrizione: ${path}`);
        return null; // Questo verrà filtrato dopo
      }
      
      return {
        title: itemTitle,
        pubDate: itemDate,
        description: itemDescription,
        link: `/blog/${itemSlug}/`,
        // Aggiungi altri campi opzionali solo se esistono
        ...(frontmatter.author && { customData: `<author>${frontmatter.author}</author>` }),
      };
    })
    // 4. Filtra via eventuali `null` da post problematici
    .filter(item => item !== null);
  
  // 5. Ordina per data, gestendo date mancanti
  items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  
  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: items, // Ora è un array pulito e valido
    customData: `<language>it-it</language>`,
  });
}