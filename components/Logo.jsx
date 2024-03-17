import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@radix-ui/react-icons";

const Logo = () => {
  return (
    <Link className="" href="/">
      <div className="font-mono font-bold md:text-xl xl:text-2xl text-purple-900 dark:text-white">
        @DevThilina
      </div>
    </Link>
  );
};

export default Logo;
