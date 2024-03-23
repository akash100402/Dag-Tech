import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  
  BsGithub,
 
  BsLinkedin,
} from "react-icons/bs";

import { IoIosContact } from "react-icons/io";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-4 border-gray-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-red-700 via-black to-gray-500 tracking-widest mr-1 rounded-lg text-white">
                DAG
              </span>
              Tech
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Our Achievements
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dag Technologies
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sahandghavidel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link href="#">X (Twitter)</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Dag Tech"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/thala.akash.39982"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/_aakash_.10._/?hl=en"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/akash-aj10/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://github.com/akash100402"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://akashs-portfolio.onrender.com/"
              icon={IoIosContact}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
