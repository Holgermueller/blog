import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Date from "@/components/date";
import Head from "next/head";

import { getAllPostIds, getPostData } from "@/lib/posts";

export default function PostPage({ postData }) {
  return (
    <div>
      <Head>{postData.title}</Head>
      <Header />
      <Nav />
      <h2 className="section-header">{postData.title}</h2>

      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

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
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
