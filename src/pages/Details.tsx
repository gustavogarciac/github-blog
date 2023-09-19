import { api } from "@/lib/axios";
import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  GithubIcon,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Post {
  userLogin: string;
  number: number;
  createdAt: Date;
  body: string;
  comments: number;
  title: string;
  url: string;
}

const Details = () => {
  const [post, setPost] = useState({} as Post);
  const params = useParams();

  async function fetchPost() {
    const response = await api.get(
      `/repos/gustavogarciac/github-blog/issues/${params.id}`,
    );
    const responseObject = {
      ...response.data,
      userLogin: response.data.user.login,
      createdAt: new Date(response.data.created_at),
    };
    setPost(responseObject);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <div className="relative z-10 mx-auto -mt-28 flex max-w-[1000px] flex-col gap-8 rounded-md bg-base-profile p-8">
        <div className="flex w-full items-center justify-between">
          <Link to={"/"}>
            <span className="flex items-center gap-2 font-bold text-base-blue hover:opacity-70">
              <ChevronLeft />
              Return
            </span>
          </Link>

          <a
            href={`https://github.com/${post.userLogin}/github-blog/issues`}
            target="_blank"
            className="flex items-end justify-center gap-2 text-sm font-bold uppercase text-base-blue"
          >
            Github
            <ExternalLink />
          </a>
        </div>

        <h1 className="text-2xl font-bold text-base-title">{post.title}</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-base-subtitle">
            <GithubIcon className="stroke-base-label" />
            <span>{post.userLogin}</span>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <Calendar className="stroke-base-label" />
            <span>{post.createdAt && formatDistanceToNow(post.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <MessageCircle className="stroke-base-label" />
            <span>{post.comments} comments</span>
          </div>
        </div>
      </div>

      <main className="mx-auto mt-4 max-w-[1000px]">
        <p className="p-8 leading-relaxed text-base-text">{post.body}</p>
      </main>
    </>
  );
};

export default Details;
