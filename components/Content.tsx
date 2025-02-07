import { BlurFade } from "./blur-fade";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Content() {
  return (
    <BlurFade className="max-w-[900px]">
      <Hero />
      <Projects/>
    </BlurFade>
  );
}
