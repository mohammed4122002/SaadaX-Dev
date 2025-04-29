import { getPostBySlug } from "@/utils/blog";
import { notFound } from "next/navigation";
import styles from "../../../styles/modules/blogPost.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  interface BlogPostMeta {
    title: string;
    date: string;
    image: string;
    contentHtml:'string' | TrustedHTML;
  }

  const post : BlogPostMeta  = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className={styles.blogPost}>
      <Link href="/blog" className={styles.backBtn}>&larr; Back</Link>
      <h1 className={styles.title}>{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        className={styles.blogImage}
        width={600}
        height={320}
        priority={false}
      />
      <span className={styles.date}>{post.date}</span>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
} 