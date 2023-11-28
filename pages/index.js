import Header from "../components/header";
import Nav from "../components/nav";
import RecentPosts from "@/components/recentPosts";
import Footer from "../components/footer";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Nav />

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} className="list-card">
              <li>
                <h3>{title}</h3>
                <br />
                {id}
                <br />
                {date}
              </li>
            </div>
          ))}
        </ul>
      </section>

      <RecentPosts allPostsData={allPostsData} />

      <Footer />
    </main>
  );
}
