import Profile from "@/components/Profile";
import SearchForm from "./components/SearchForm";
import { api } from "@/lib/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Post {
  number: number;
  url: string;
  body: string;
  title: string;
  created_at: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  async function fetchPosts(query?: string) {
    let fetchUrl;

    query
      ? (fetchUrl = `/search/issues?q=${query}%20repo:gustavogarciac/github-blog`)
      : (fetchUrl = `/search/issues?q=%20repo:gustavogarciac/github-blog`);

    const response = await api.get(fetchUrl);
    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Profile />

      <main className="mx-auto max-w-[1000px] p-4 ">
        <SearchForm postsLength={posts.length} fetchPosts={fetchPosts} />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              to={`/details/${post.number}`}
              className="space-y-6 rounded-md bg-base-post p-8"
              key={post.number}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-base-title">{post.title}</h1>
                <span className="text-sm text-base-span">
                  {formatDistanceToNow(new Date(post.created_at))}
                </span>
              </div>
              <p className="flex-1 leading-relaxed text-base-text">
                {post.body.substring(0, 120).concat("...")}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
