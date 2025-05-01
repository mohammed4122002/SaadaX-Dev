import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'data/blog-posts');

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  image: string;
  summary: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

export function getAllPosts(): BlogPostMeta[] {
  try {
    return fs.readdirSync(postsDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, file);
        const { data  } = matter(fs.readFileSync(fullPath, 'utf8'));
        
        return {
          slug,
          title: data.title,
          date: data.date,
          image: data.image,
          summary: data.summary,
        };
      });
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      image: data.image,
      summary: data.summary,
      contentHtml: processedContent.toString(),
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}