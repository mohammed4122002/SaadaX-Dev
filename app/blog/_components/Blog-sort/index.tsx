"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { FaSortAmountDown  , FaSortAmountUp} from "react-icons/fa";

import styles from "./index.module.css"

const BlogSort = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort") || "asc"

  const handleSort = (newSort: "asc" | "desc") => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", newSort)
    router.replace(`?${params.toString()}`)
  }

  return (
    <div className={styles["blog-sort"]} data-sort={sort}>
      <button
        type="button"
        onClick={() => handleSort("asc")}
        aria-label="Sort ascending"
      >
        <FaSortAmountUp />
      </button>
      <button
        type="button"
        onClick={() => handleSort("desc")}
        aria-label="Sort descending"
      >
        <FaSortAmountDown  />
      </button>
    </div>
  )
}

export { BlogSort }