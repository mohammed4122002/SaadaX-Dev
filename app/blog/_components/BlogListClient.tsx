"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/modules/blogList.module.css";
import { BlogPostMeta } from "@/utils/blog";

interface BlogListProps {
  blogs: Promise<BlogPostMeta[]>
  sortOrder: "asc" | "desc"
}


export default function BlogListClient({ blogs , sortOrder }:BlogListProps) {

  const resolvedBlogs = use(blogs)

  const sortedPosts = [...resolvedBlogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder=="asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });

;

  return (
   
    
      <div className={styles.blogList}>
        {sortedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
            <Image
              src={post.image}
              alt={post.title}
              className={styles.blogImage}
              width={600}
              height={320}
            />
            <div className={styles.blogCardContent}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.readMoreBtn}>Read More</span>
            </div>
          </Link>
        ))}
      </div>
   
  );
} 