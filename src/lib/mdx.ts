import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getPostBySlug(type: 'blog' | 'news', slug: string) {
  const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, meta: data, content };
}

export async function getAllPosts(type: 'blog' | 'news') {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return [];
  const slugs = fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'));
  const posts = slugs.map((slug) => {
    const fullPath = path.join(dirPath, slug);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug: slug.replace(/\.mdx$/, ''), meta: data };
  });
  return posts.sort((a, b) => (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()));
}
