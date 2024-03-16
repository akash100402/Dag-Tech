
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import BannerSlide from "../components/BannerSlide";
import CompanyHeader from "../components/Slogan";


export default function Home() {
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
      <div className="flex flex-col gap-6 p-12 px-3 max-w-6xl mx-auto ">
        <BannerSlide />
        <CompanyHeader />
    
        <div className="px-6 md:px-14"></div>

        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all Projects
        </Link>
      </div>
      <div className="p-3 px-12 bg-amber-100 sm:px-28 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="w-full mx-auto  p-3 flex  flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col  gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Ongoing Projects
            </h2>
            <div className="flex justify-center flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
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
