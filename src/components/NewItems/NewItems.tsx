import React from "react";
import Image from "next/image";
import Item from "./Item";
import { mockItems } from "@/mock-data";
import { mock } from "node:test";

const NewItems = () => {
  return (
    <section className="new-items-cont">
      <div className="new-item-grid grid-details">
        {mockItems.map((mockItem) => (
          <Item itemToPurchase={mockItem} key={mockItem.articleId} />
        ))}
      </div>
    </section>
  );
};

export default NewItems;
