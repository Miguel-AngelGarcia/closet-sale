import React from "react";
import Image from "next/image";

const RelatedProducts = () => {
  const dat = [
    {
      id: 0,
      link: "/one.jpg",
      text: "polo tie image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 1,
      link: "/two.jpg",
      text: "baby teto image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 2,
      link: "/one.jpg",
      text: "polo tie image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 3,
      link: "/two.jpg",
      text: "baby teto image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 4,
      link: "/one.jpg",
      text: "polo tie image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 5,
      link: "/two.jpg",
      text: "baby teto image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 6,
      link: "/one.jpg",
      text: "polo tie image",
      prod_link: "/#",
      price: "$230",
    },
    {
      id: 7,
      link: "/two.jpg",
      text: "baby teto image",
      prod_link: "/#",
      price: "$230",
    },
  ];
  return (
    <div className="related-products-block">
      <section className="related-products">
        <h2 className="r-p-h">Related products</h2>
        <ul className="r-p-ul">
          {dat.map((rp) => (
            <li key={rp.id} className="r-p-li">
              <figure className="r-p box">
                <a href={rp.prod_link}></a>
                <div className="r-p-content">
                  <div className="r-p-img-cont">
                    <Image
                      src={rp.link}
                      alt={`related product: ${rp.text}`}
                      fill
                      priority={true}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <figcaption className="r-p-fc">
                  <div className="fc-left">
                    <span>{rp.text}</span>
                  </div>
                  <div className="fc-right">
                    <span>{rp.price}</span>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RelatedProducts;
