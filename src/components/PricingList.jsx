import React, { useState } from "react";
import { Tabs } from "antd";
import { pricing, webDevelopmentPricing, pricingMobile, webDevelopmentPricingMobile } from "../constants";
import Button from "./Button";

const titleColors = ["#FF5733", "#e86d00", " #8325c4", "#0c6afe"];

const { TabPane } = Tabs;

const serviceCategories = {
  socialMedia: pricing,
  webDevelopment: webDevelopmentPricing,
};

const serviceCategoriesMobile = {
  socialMediaMobile: pricingMobile,
  webDevelopmentMobile: webDevelopmentPricingMobile,
};

const PricingList = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(true);

  const isImageUrl = (str) => {
    return str?.endsWith(".png") || str?.endsWith(".jpg") || str?.endsWith(".jpeg") || str?.endsWith(".svg");
  };

  return (
    <>
      <div className="desktop-view">
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
      </div>

      <div className="mobile-view ">
      <Tabs
        defaultActiveKey="digitalMarketingMobile"
        centered
        
        tabBarStyle={{ display: 'flex', overflowX: 'auto' }}
        className="flex overflow-x-auto "
      >
          <TabPane tab="Digital Marketing" key="socialMediaMobile" >
            <div className="fade-in">
              <PricingCategory category={serviceCategoriesMobile.socialMediaMobile} showAllFeatures={showAllFeatures} isImageUrl={isImageUrl} />
            </div>
          </TabPane>
          <TabPane tab="Social Media Management" key="webDevelopmentMobile" >
            <div className="fade-in">
              <PricingCategory category={serviceCategoriesMobile.webDevelopmentMobile} showAllFeatures={showAllFeatures} isImageUrl={isImageUrl} />
            </div>
          </TabPane>
          <TabPane tab="Social Media " key="webDevelopmentMobile" >
            <div className="fade-in">
              <PricingCategory category={serviceCategoriesMobile.webDevelopmentMobile} showAllFeatures={showAllFeatures} isImageUrl={isImageUrl} />
            </div>
          </TabPane>
          
        </Tabs>
      </div>
    </>
  );
};

const PricingCategory = ({ category, showAllFeatures, isImageUrl }) => (
  <div className="flex gap-[2rem] max-lg:flex-wrap justify-center mt-10">
    {category.map((item, index) => (
      <div
        key={item.id}
        className="subscription w-[19rem] max-lg:w-full px-6  rounded-[2rem] lg:w-auto py-8 hover:scale-105 transition ease-in-out delay-80 bg-sky-950"
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
        <FeatureList features={showAllFeatures ? item.features : item.features.slice(0, 3)} />
      </div>
    ))}
  </div>
);

const FeatureList = ({ features }) => (
  <ul className="flex-col flex items-center w-full">
    {features.map((feature) => (
      <li key={feature.id} className="flex items-start py-5 border-t border-n-6 w-full">
        <p className="text-center body-2 justify-center w-full flex">
          {feature.imageUrl ? (
            <img src={feature.imageUrl} alt={feature.name} className="h-6 w-6 mr-2" />
          ) : null}
          <span>{feature.name}</span>
        </p>
      </li>
    ))}
  </ul>
);



export default PricingList;
