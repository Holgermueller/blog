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
      <section>
        <div className="container">
          <img src={postData.cover_image} alt="" height="50%" width="100%" />
          <h2 className="hero-header">{postData.title}</h2>
        </div>

        <br />
        <div className="time">
          <Date dateString={postData.date} />
        </div>

        <div
          className="post-paragraph"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </section>

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
