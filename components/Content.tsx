import { BlurFade } from "./blur-fade";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Content() {
  return (
    <BlurFade className="max-w-[900px]">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </BlurFade>
  );
}
