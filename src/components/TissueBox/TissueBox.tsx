import React from "react";
import Image from "next/image";

const TissueBox = () => {
  const dat = [
    {
      id: 0,
      link: "https://www.nyc.gov/assets/home/images/programs/DDC-bid.jpg",
      text: "polo tie image",
      title: "Bid Openings",
      par: "See DDC’s latest bid opportunities and how to join our Pre-qualified List (PQL).",
    },
    {
      id: 1,
      link: "https://www.nyc.gov/assets/home/images/programs/DDC-rfp.jpg",
      text: "baby teto image",
      title: "Request for Proposals",
      par: "DDC is committed to achieving excellence in the design and construction of its capital program.",
    },
    {
      id: 2,
      link: "https://www.nyc.gov/assets/home/images/programs/ddc-design-and-construction-excellence.jpg",
      text: "polo tie image",
      title: "Design and Construction Excellence",
      par: "Delivering high quality public buildings and infrastructure projects for NYC.",
    },
    {
      id: 3,
      link: "https://www.nyc.gov/assets/home/images/programs/DDC-town-gown.png",
      text: "baby teto image",
      title: "Town+Gown",
      par: "Brings together academics and practitioners on research projects.",
    },
    {
      id: 4,
      link: "https://www.nyc.gov/assets/home/images/programs/DOITT_OpenData.png",
      text: "polo tie image",
      title: "NYC Open Data",
      par: "Access more than 1,400 NYC data sets for free, at any time via the NYC Open Data portal.",
    },
    {
      id: 5,
      link: "https://www.nyc.gov/assets/home/images/programs/under-5-vaxx-480x480-eng-nogo-v1-.jpg",
      text: "baby teto image",
      title: "COVID-19 Vaccine",
      par: "Safe and effective COVID-19 vaccines are available to all New Yorkers 6 months and older.",
    },
    {
      id: 6,
      link: "https://www.nyc.gov/assets/home/images/programs/DDC-mwbe.jpg",
      text: "polo tie image",
      title: "MWBE Opportunities",
      par: "Learn how your business can contribute to building a New York City for all.",
    },
    {
      id: 7,
      link: "https://www.nyc.gov/assets/home/images/programs/DDC-escr.jpg",
      text: "baby teto image",
      title: "East Side Coastal Resiliency",
      par: "An urgent project that seeks to keep New Yorkers safe in flood-prone areas.",
    },
  ];

  return (
    <div className="tissue-box-wrapper">
      <div className="tissue-box-cont">
        <div className="tissue-box-label">
          <div className="tb-l-cont">
            <div className="tb-l-c-inner-outline ">
              <div className="tb-l-c-title ">
                <h6 className="">Programs & Initiatives</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="tissue-box-content-wrap">
          <div className="eee">
            <div className="tissue-box-content-cont">
              <div className="prog-init-slider">
                {dat.map((product) => (
                  <div className="pis-item-wrap" key={product.id}>
                    <div className="pis-item">
                      <div className="pis-image">
                        <img
                          src={product.link}
                          alt={`${product.text}`}
                          fill
                          priority={true}
                          className=""
                        />
                      </div>
                      <div className="pis-text">
                        <div className="pis-t-flex">
                          <p className="pis-par">{product.par}</p>

                          <div className="spacer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TissueBox;
