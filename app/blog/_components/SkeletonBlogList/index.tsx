import styles from "./SkeletonBlogList.module.css";

export default function SkeletonBlogList({ count = 3 }: { count?: number }) {
  return (
    <div className={styles.skeletonList}>
      {Array.from({ length: count }).map((_, i) => (
        <div className={styles.skeletonCard} key={i}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonLine} style={{ width: "90%" }} />
            <div className={styles.skeletonLine} style={{ width: "80%" }} />
            <div className={styles.skeletonDate} />
            <div className={styles.skeletonBtn} />
          </div>
        </div>
      ))}
    </div>
  );
} 