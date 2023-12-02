import Header from "../components/header";
import Nav from "../components/nav";
import RecentPosts from "@/components/recentPosts";
import Footer from "../components/footer";
import Date from "@/components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

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
        <h2 className="section-header">{allPostsData[0].title}</h2>
        <Date dateString={allPostsData[0].date} />

        <div
          className="post-paragraph"
          dangerouslySetInnerHTML={{ __html: allPostsData[0].contentHtml }}
        />
      </section>

      <div>
        <RecentPosts allPostsData={allPostsData} />
      </div>

      <Footer />
    </main>
  );
}
