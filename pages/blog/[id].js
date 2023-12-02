import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

import { getAllPostIds, getPostData } from "@/lib/posts";

export default function PostPage({ postData }) {
  return (
    <div>
      <Header />
      <Nav />
      <h2 className="section-header">This is a post page.</h2>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
