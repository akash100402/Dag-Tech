import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className=" w-full mx-auto flex justify-around items-center flex-col gap-4 py-3 ">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-md text-gray-500">
          Providing Seamless IT Services, Every Step of the Way
        </p>
      </div>
      <div className="w-full mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Ongoing Projects
            </h2>
            {/* Wrap the post cards in a flex container */}
            <div className="flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <CallToAction />
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all Projects
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
