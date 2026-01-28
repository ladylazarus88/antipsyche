export function getPosts() {
  const posts = import.meta.glob([
    '../content/blog/quaderni/*.md',
    '../content/blog/quaderni/*.mdx',
    '../content/blog/contrappunti/*.md',
    '../content/blog/contrappunti/*.mdx'
  ], { eager: true });
  
  return Object.values(posts)
    .filter(post => post.frontmatter?.date)
    .map(post => {
      const slug = post.file.split('/').pop()?.replace(/\.(md|mdx)$/, '');
      const category = post.file.includes('quaderni') ? 'quaderni' : 'contrappunti';
      
      return {
        title: post.frontmatter.title,
        image: post.frontmatter.image,
        date: post.frontmatter.date,
        slug: slug,
        url: `/blog/${category}/${slug}`,
        author: post.frontmatter.author,
        excerpt: post.frontmatter.excerpt,
        category: category,
        formattedDate: new Date(post.frontmatter.date).toLocaleDateString('it-IT', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getContrappuntiPosts() {
  return getPosts().filter(post => post.category === 'contrappunti');
}

export function getQuaderniPosts() {
  return getPosts().filter(post => post.category === 'quaderni');
}