import Image from "next/image";
import Facebook from "../../public/socials/facebook.png";
import Instagram from "../../public/socials/instagram.png";
import Reddit from "../../public/socials/reddit.png";
import TikTok from "../../public/socials/tiktok.png";
import Twitter from "../../public/socials/twitter.png";

const socials = [
  { name: "Facebook", image: Facebook, link: "" },
  { name: "Instagram", image: Instagram, link: "" },
  { name: "Reddit", image: Reddit, link: "" },
  { name: "TikTok", image: TikTok, link: "" },
  { name: "Twitter", image: Twitter, link: "" },
];

export default function Socials() {
  return (
    <div className="flex flex-col fixed right-7 top-[42%] gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href="/"
          className="decoration-none justify-center items-center flex flex-col"
        >
          {social.name === "Twitter" ? (
            <Image
              src={social.image}
              alt={social.name}
              width={80}
              height={50}
              className="mx-auto"
            />
          ) : (
            <Image
              src={social.image}
              alt={social.name}
              width={50}
              height={50}
              className="object-cover"
            />
          )}
        </a>
      ))}
    </div>
  );
};
