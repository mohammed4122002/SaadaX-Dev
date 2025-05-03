import { getPostBySlug } from "@/utils/blog";
import { notFound } from "next/navigation";
import styles from "../../../styles/modules/blogPost.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>}): Promise<Metadata> {
 
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const ogImage = post.image || `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${encodeURIComponent(post.title ?? "Blog")}`;
 
  return {
    title: `${post.title} | Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title || ""
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [ogImage]
    },
  };
}


export default async function BlogPostPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
      <span className={styles.date}>{post.date}</span>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}