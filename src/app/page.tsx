import Image from "next/image";
import { ProductPage } from "@/components";

export default function Home() {
  return (
    <main className="bg-white main">
      <ProductPage />
      <ProductPage />
    </main>
  );
}
