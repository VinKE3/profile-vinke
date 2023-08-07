import Link from "next/link";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiYoutubeLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.facebook.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookCircleLine />
      </Link>
      <Link
        href="https://www.twitter.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href="https://www.instagram.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://www.linkedin.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://www.youtube.com/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
