import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { useRouter } from "next/router";

import { getSortedPostsData } from "@/lib/posts";

export async function getStaticPaths() {
  const posts = getSortedPostsData();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function PostPage({ post }) {
  // const router = useRouter();
  return (
    <div>
      <Header />
      <Nav />
      <h2 className="section-header">This is a post page.</h2>
      <p>{post.title}</p>

      <Footer />
    </div>
  );
}
