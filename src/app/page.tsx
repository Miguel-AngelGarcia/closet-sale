import Image from "next/image";
import { ProductPage } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col h-ful w-full bg-white">
      <ProductPage />
    </main>
  );
}
