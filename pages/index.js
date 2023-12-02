import Header from "../components/header";
import Nav from "../components/nav";
import RecentPosts from "@/components/recentPosts";
import Footer from "../components/footer";
import Link from "next/link";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Nav />

      <section>
        <h2>Blog</h2>

        <ul>
          {allPostsData.map((post) => (
            <div key={post.id} className="list-card">
              <li>
                <h3>{post.title}</h3>

                <br />
                <Date dateString={post.date} />
                <br />
                <Link
                  href={{
                    pathname: "blog/[id]",
                    query: {
                      id: post.id,
                    },
                  }}
                >
                  Read More
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </section>

      <section>
        <RecentPosts allPostsData={allPostsData} />
      </section>

      <Footer />
    </main>
  );
}
