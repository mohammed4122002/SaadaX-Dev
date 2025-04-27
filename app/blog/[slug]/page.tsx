import { getPostBySlug } from "@/utils/blog";
import { notFound } from "next/navigation";
import styles from "../../../styles/modules/blogPost.module.css";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className={styles.blogPost}>
      <Link href="/blog" className={styles.backBtn}>&larr; Back</Link>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.image} alt={post.title} className={styles.blogImage} />
      <span className={styles.date}>{post.date}</span>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
} 