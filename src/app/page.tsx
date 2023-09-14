import Image from "next/image";
import { ProductPage, Categories } from "@/components";

export default function Home() {
  return (
    <main className="bg-white main">
      <Categories />
    </main>
  );
}
