import { getAllPosts } from "@/utils/blog";
import Link from "next/link";
import styles from "../../styles/modules/blogList.module.css";

const BlogListPage=()=> {
  const posts = getAllPosts();
  return (
    <section className={styles.blogListSection}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.blogList}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
            <img src={post.image} alt={post.title} className={styles.blogImage} />
            <div className={styles.blogCardContent}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.readMoreBtn}>Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 
export default BlogListPage;