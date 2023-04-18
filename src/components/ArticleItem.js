import Link from "next/link";
import styles from "@/styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className={styles.card}>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
