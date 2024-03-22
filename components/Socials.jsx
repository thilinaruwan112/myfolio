"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

// icons

const icons = [
  {
    path: "https://www.youtube.com/@inspirelk438",
    name: <RiYoutubeFill />,
  },
  {
    path: "www.linkedin.com/in/thilinaruwan11",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/thilinaruwan112",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/thilinaruwanofficial",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/thilina_ruwan_",
    name: <RiInstagramFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
