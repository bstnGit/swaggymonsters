import Image from "next/image";
import Facebook from "../../public/socials/Facebook.png";
import Instagram from "../../public/socials/Instagram.png";
import Reddit from "../../public/socials/Reddit.png";
import TikTok from "../../public/socials/TikTok.png";
import Twitter from "../../public/socials/Twitter.png";

const socials = [
  { name: "Facebook", image: Facebook },
  { name: "Instagram", image: Instagram },
  { name: "Reddit", image: Reddit },
  { name: "TikTok", image: TikTok },
  { name: "Twitter", image: Twitter },
];

export const Socials = () => {
  return (
    <div className="bg-transparent flex flex-col fixed right-7 top-[50%] gap-6">
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
              className="mx-auto object-cover"
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
