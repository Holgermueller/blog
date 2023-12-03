import Header from "../components/header";
import Nav from "../components/nav";
import RecentPosts from "@/components/recentPosts";
import Footer from "../components/footer";
import Date from "@/components/date";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <main>
      <Header />
      <Nav />

      <section>
        <div className="container">
          <img
            src={allPostsData[0].cover_image}
            alt=""
            height="50%"
            width="100%"
          />
          <h2 className="hero-header">{allPostsData[0].title}</h2>
        </div>

        <Date dateString={allPostsData[0].date} />

        <p>{allPostsData[0].preview}</p>
        <Link
          href={{
            pathname: "blog/[id]",
            query: {
              id: allPostsData[0].id,
            },
          }}
        >
          Read More
        </Link>
      </section>

      <div>
        <RecentPosts allPostsData={allPostsData.slice(1)} />
      </div>

      <Footer />
    </main>
  );
}
