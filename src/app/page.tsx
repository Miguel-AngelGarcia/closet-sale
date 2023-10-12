import Image from "next/image";
import {
  ProductPage,
  Categories,
  Form,
  TissueBox,
  Connect,
  Hero,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-white main">
      <Hero />
      <TissueBox />
      <Connect />
    </main>
  );
}
