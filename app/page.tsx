import { AppBar } from "@/components/AppBar";
import Content from "@/components/Content";


export default function Home() {
  return (
    <div>
       <AppBar/>
       <div className="flex justify-center">
       <Content/>
       </div>
    </div>
  );
}
