import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import LottieMission from "../components/Lottie/LottieMission";
import LottieAbout from "../components/Lottie/LottieAbout"
import LottieValues from "../components/Lottie/LottieValues";
import LottieExpertise from "../components/Lottie/LottieExpertise";
import LottieApart from "../components/Lottie/LottieApart";


export default function About() {
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
      <div className="flex flex-col gap-y-8 p-28 px-3 max-w-6xl mx-auto lg:gap-y-32">
        <div className="flex items-center justify-around">
          <div>
            <h1 className="text-3xl font-bold mb-3 lg:text-6xl">About Us</h1>
            <div className="flex justify-around gap-4 items-center">
              <p className="text-gray-500 text-xs sm:text-xl">
                Welcome to DAG Technologies, where innovation meets excellence
                in the world of software solutions. Established in 2020, we have
                been at the forefront of transforming ideas into powerful,
                scalable, and reliable software applications.
              </p>
            </div>
          </div>
          <LottieAbout />
        </div>

        <div className="flex justify-around">
          <LottieMission />
          <div>
            <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Our Mission</h1>

            <p className="text-gray-500 text-xs sm:text-xl">
              At DAG Technologies, our mission is to revolutionize the way
              businesses operate, empower individuals through technology, etc.
              We are dedicated to delivering cutting-edge solutions that not
              only meet but exceed our clients' expectations.
            </p>
          </div>
        </div>

        <div className="flex gap-8 justify-around">
          <div>
            <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Our Values</h1>
            <div>
              <p className="text-gray-500 text-xs sm:text-xl">
                Innovation: We thrive on pushing the boundaries of what's
                possible, constantly seeking new and creative ways to solve
                complex problems. Integrity: Honesty, transparency, and ethical
                practices are the foundation of our relationships with clients,
                partners, and employees. Excellence: We are committed to
                delivering solutions of the highest quality, with a focus on
                precision, efficiency, and user satisfaction. Collaboration: We
                believe in the power of teamwork and collaboration. By working
                closely with our clients and partners, we create solutions that
                drive mutual success.
              </p>
            </div>
          </div>
          <LottieValues />
        </div>
        <div className="flex justify-around gap-8">
          <LottieExpertise />
          <div>
            <h1 className="text-3xl font-bold mb-3 lg:text-6xl"> Expertise</h1>
            <p className="text-gray-500 text-xs sm:text-xl">
              A team of highly skilled and experienced professionals,DAG
              Technologies specializes in web development, mobile applications,
              etc. Our expertise extends across various industries, allowing us
              to provide tailored solutions to meet the unique challenges of
              each client.
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-3 lg:text-6xl">
              What Sets Us Apart
            </h1>
            <p className="text-gray-500 text-xs sm:text-xl">
              Client-Centric Approach: We prioritize our clients' needs and
              goals, ensuring that every solution is tailored to their specific
              requirements. Continuous Learning: In the ever-evolving landscape
              of technology, we stay ahead by embracing continuous learning and
              staying abreast of the latest trends. Agile Development: Our agile
              development methodology ensures flexibility, adaptability, and
              rapid delivery, keeping our clients ahead in the competitive
              market.
            </p>
          </div>
          <LottieApart />
        </div>

       
      </div>
      
    </div>
  );
}
