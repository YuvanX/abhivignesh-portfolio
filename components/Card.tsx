import Link from "next/link";
import { InteractiveHoverButton } from "./interactive-hover-button";
import { ShineBorder } from "./shine-border";
import Tech from "./techCard";
import Image from "next/image";

export default function Card({
  icon,
  title,
  description,
  tech,
  websiteLink,
  sourceLink,
}: {
  icon: string;
  title: string;
  description: string;
  tech: string[];
  websiteLink: string;
  sourceLink: string;
}) {
  return (
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="my-5">
      <div className="flex flex-col p-3 cursor-pointer">
        <div className="my-4">
          <Image
            width={10}
            height={10}
            alt="icon"
            src={icon}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="font-custom font-semibold text-xl mb-2">{title}</div>
        <div className="mb-2 text-gray-400 line-clamp-3">{description}</div>
        <div className="mt-2 mb-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Tech key={t} tech={t} />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Link href={websiteLink}>
              <InteractiveHoverButton className=" text-xs">
                Website
              </InteractiveHoverButton>
            </Link>
          </div>
          <div>
            <Link href={sourceLink}>
              <InteractiveHoverButton className="text-xs">
                Source
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </div>
    </ShineBorder>
  );
}
