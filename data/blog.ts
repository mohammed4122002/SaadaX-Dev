export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "react-performance-tips",
    title: "10 Tips to Improve React Performance",
    summary: "Learn how to make your React apps faster and more efficient.",
    content: `React performance is crucial for a great user experience. In this article, we cover 10 practical tips to optimize your React applications, including memoization, code splitting, and more...`,
    date: "2024-04-01",
    image: "https://via.placeholder.com/600x320?text=React+Performance",
  },
  {
    slug: "nextjs-seo-guide",
    title: "Next.js SEO Best Practices",
    summary: "A complete guide to optimizing your Next.js site for search engines.",
    content: `SEO is essential for web visibility. This guide covers how to use Next.js features like Head, metadata, and dynamic routes to boost your site's SEO...`,
    date: "2024-03-15",
    image: "https://via.placeholder.com/600x320?text=Next.js+SEO",
  },
  {
    slug: "modern-css-tricks",
    title: "Modern CSS Tricks for 2024",
    summary: "Discover the latest CSS techniques to make your UI stand out.",
    content: `CSS is evolving fast! Learn about container queries, new pseudo-classes, and how to use them for beautiful, responsive designs...`,
    date: "2024-02-28",
    image: "https://via.placeholder.com/600x320?text=CSS+Tricks",
  },
]; 