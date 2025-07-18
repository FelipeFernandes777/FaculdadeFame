import {Header} from "@/components/header";
import {Banner} from "@/components/banner";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white overflow-hidden">
      <Header />
        <Banner />
    </div>
  );
}
