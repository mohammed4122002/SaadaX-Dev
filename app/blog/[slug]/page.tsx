import { getPostBySlug } from "@/utils/blog";
import { notFound } from "next/navigation";
import styles from "../../../styles/modules/blogPost.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <article className={styles.blogPost}>
      <Link href="/blog" className={styles.backBtn}>
        &larr; Back
      </Link>
      <h1 className={styles.title}>{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={320}
        className={styles.blogImage}
        priority
      />
      <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}