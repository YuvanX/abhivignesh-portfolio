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
    <div className="mt-20 mx-5 lg:mx-10">
      <h1 className="text-center font-semibold font-custom text-3xl">
        Projects
      </h1>
      <div>
        {DATA.map((data: DataType) => (
          <Card
          key={data.title}
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
