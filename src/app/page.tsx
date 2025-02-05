import Image from "next/image";
import {
  ProductPage,
  Categories,
  Form,
  Connect,
  Hero,
  NewItems,
  ItemPage,
  HomeScreen,
} from "@/components";
import { Item } from "@/components/NewItems";

export default function Home() {
  return (
    <main className="bg-white main">
      <HomeScreen />
    </main>
  );
}
