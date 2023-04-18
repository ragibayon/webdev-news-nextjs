import Link from "next/link";
import { useRouter } from "next/router";
import { server } from "@/config";
import Meta from "@/components/Meta";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title="Article" description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${server}/api/articles/${ctx.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (ctx) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getServerSideProps = async (ctx) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
//     );
//     const article = await res.json();
//     return {
//       props: {
//         article,
//       },
//     };
//   };

export default article;
