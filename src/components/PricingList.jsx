import React, { useState } from "react";
import { Tabs } from "antd";
import { pricing, webDevelopmentPricing, aiServicesPricing } from "../constants";
import Button from "./Button";

const titleColors = ["#FF5733", "#e86d00", " #8325c4", "#0c6afe"]; 

const { TabPane } = Tabs;

const serviceCategories = {
  socialMedia: pricing,
  webDevelopment: webDevelopmentPricing,
  aiServices: aiServicesPricing,
};

const PricingList = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const isImageUrl = (str) => {
    return str?.endsWith(".png") || str?.endsWith(".jpg") || str?.endsWith(".jpeg") || str?.endsWith(".svg");
  };

  return (
    <div>
      <Tabs defaultActiveKey="socialMedia" centered style={{ borderBottom: 'none' }}>
      <TabPane tab="Digital Marketing" key="socialMedia">
        <div className="fade-in">
          <PricingCategory category={serviceCategories.socialMedia} showAllFeatures={showAllFeatures} isImageUrl={isImageUrl} />
        </div>
      </TabPane>
      <TabPane tab="Social Media Management" key="webDevelopment">
        <div className="fade-in">
          <PricingCategory category={serviceCategories.webDevelopment} showAllFeatures={showAllFeatures} isImageUrl={isImageUrl} />
        </div>
      </TabPane>
      </Tabs>
      <div className="flex justify-center mt-10">
        <button className="text-xs font-code font-bold tracking-wider uppercase border-b" onClick={() => setShowAllFeatures(!showAllFeatures)}>
          {showAllFeatures ? "Show less" : "Show all features"}
        </button>
      </div>
    </div>
  );
};

const PricingCategory = ({ category, showAllFeatures, isImageUrl }) => (
  <div className="flex gap-[2rem] max-lg:flex-wrap justify-center mt-10">
    {category.map((item,index) => (
      <div
        key={item.id}
        className="w-[19rem] max-lg:w-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-8 hover:scale-105 transition ease-in-out delay-80"
      >
        <h4
              className="mb-4 h4"
              style={{ color: titleColors[index % titleColors.length] }}
            >
              {item.title}
            </h4>
        <p className="body-2 text-lg min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
        <div className="flex items-center h-[5.5rem] mb-6">
        {item.id !== "3" && item.price && (
                <>
                  <div className="h3" style={{ fontSize: "1.8rem" }}>
                    RS
                  </div>
                </>
              )}
              {item.price && (
                <div className="text-[3.5rem] leading-none font-bold ">
                  {item.price}
                </div>
              )}
        </div>
        {item.id !== "3" && (
              <Button
                className="w-full mb-6"
                href={item.price ? "/pricing" : "mailto:techwings01@gmail.com"}
                white={!!item.price}
              >
                {item.price ? "Get started" : "Contact us"}
              </Button>
            )}
            {item.id === "3" && (
              <Button
                className="w-full mb-6 invisible"
                href={item.price ? "/pricing" : "mailto:techwings01@gmail.com"}
                white={!!item.price}
              >
                {item.price ? "Get started" : "Contact us"}
              </Button>
            )}
        <ul className="flex-col flex items-center w-full">
              {(showAllFeatures
                ? item.features
                : item.features.slice(0, 3)
              ).map((feature) => (
                <li
                  key={feature.id}
                  className="flex items-start py-5 border-t border-n-6 w-full"
                >
                  <p className="text-center body-2 justify-center w-full flex">
                    {feature.imageUrl ? (
                      <img
                        src={feature.imageUrl}
                        alt={feature.name}
                        className="h-6 w-6 "
                      />
                    ) : (
                      feature.name
                    )}
                  </p>
                </li>
              ))}
            </ul>
      </div>
    ))}
  </div>
);

export default PricingList;
