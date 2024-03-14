
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
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <CompanyHeader/>
        <h1 className="text-3xl font-bold lg:text-6xl">Our Values</h1>
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">
            Innovation: We thrive on pushing the boundaries of what's possible,
            constantly seeking new and creative ways to solve complex problems.
            Integrity: Honesty, transparency, and ethical practices are the
            foundation of our relationships with clients, partners, and
            employees. Excellence: We are committed to delivering solutions of
            the highest quality, with a focus on precision, efficiency, and user
            satisfaction. Collaboration: We believe in the power of teamwork and
            collaboration. By working closely with our clients and partners, we
            create solutions that drive mutual success.
          </p>
        </div>

        <h1 className="text-3xl font-bold lg:text-6xl"> Expertise</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          A team of highly skilled and experienced professionals,DAG
          Technologies specializes in web development, mobile applications, etc.
          Our expertise extends across various industries, allowing us to
          provide tailored solutions to meet the unique challenges of each
          client.
        </p>
        <div className="px-6 md:px-14" >
          <BannerSlide />
        </div>

        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all Projects
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex  flex-col gap-8 py-7">
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
