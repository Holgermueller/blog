import Link from "next/link";
import Date from "./date";
import { FaArrowRight } from "react-icons/fa";

export default function RecentPosts({ allPostsData }) {
  return (
    <section className="recent-posts">
      <h2 className="recent-posts-header">Recent Posts</h2>
      <ul>
        <div className="recent-posts-container">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="recent-posts-card">
              <h3>{title}</h3>

              <br />
              <Date dateString={date} />
              <br />
              <Link
                href={{
                  pathname: "blog/[id]",
                  query: {
                    id: id,
                  },
                }}
              >
                Read More <FaArrowRight />
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
}
