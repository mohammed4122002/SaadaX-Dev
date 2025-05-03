import { getAllPosts } from "@/utils/blog";
import BlogListClient from "./_components/BlogListClient";
import { BlogSort } from "./_components/Blog-sort";
import styles from "../../styles/modules/blogAll.module.css";
import { Suspense } from "react";
import SkeletonBlogList from "./_components/SkeletonBlogList";

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const blogs =  getAllPosts()

  const { sort } = await searchParams

  const sortOrder = sort === "desc" ? "desc" : "asc" // default to 'asc'

  return (
    <section className={styles.blogSection}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Blog</h1>
        <BlogSort />
      </div>
      <Suspense fallback={<SkeletonBlogList count={7} />}>
        
        <BlogListClient blogs={blogs} sortOrder={sortOrder} />
      </Suspense>
    </section>
  );
}
