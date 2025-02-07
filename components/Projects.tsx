import { DATA } from "@/util/data";
import Card from "./Card";
type DataType = {
  title: string;
  icon: string;
  description: string;
  tech: string[];
  websiteLink: string;
  sourceLink: string;
};
export default function Projects() {
  return (
    <div>
      <h1 className="text-center font-semibold font-custom text-3xl mt-20">
        Projects
      </h1>
      <div>
        {DATA.map((data: DataType) => (
          <Card
            title={data.title}
            icon={data.icon}
            description={data.description}
            tech={data.tech}
            websiteLink={data.websiteLink}
            sourceLink={data.sourceLink}
          />
        ))}
      </div>
    </div>
  );
}
