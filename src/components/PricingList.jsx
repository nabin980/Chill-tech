import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

// PricingList.js

import { useState } from "react"; // Import useState hook

const PricingList = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false); // State to toggle displaying all features

  return (
    <>
      <div className="flex gap-[2rem] max-lg:flex-wrap justify-center">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-8  [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 hover:scale-105 transition ease-in-out delay-80"
          >
            <h4 className="mb-4 h4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3" style={{ fontSize: "1.8rem" }}>
                    RS
                  </div>
                  <div className="text-[3.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>
            <Button
              className="w-full mb-6"
              href={item.price ? "/pricing" : "mailto:techwings01@gmail.com"}
              white={!!item.price}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
            <ul>
              {showAllFeatures
                ? // Render all features
                  item.features.map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-start py-5 border-t border-n-6"
                    >
                      <img
                        src={feature.imageUrl}
                        width={24}
                        height={24}
                        alt={feature.name}
                      />
                      <p className="ml-4 body-2">{feature.name}</p>
                    </li>
                  ))
                : // Render only 3 features
                  item.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-start py-5 border-t border-n-6"
                    >
                      <img
                        src={feature.imageUrl}
                        width={24}
                        height={24}
                        alt={feature.name}
                      />
                      <p className="ml-4 body-2">{feature.name}</p>
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="text-xs font-code font-bold tracking-wider uppercase border-b"
          onClick={() => setShowAllFeatures(!showAllFeatures)}
        >
          {showAllFeatures ? "Show less" : "Show all features"}
        </button>
      </div>
    </>
  );
};

export default PricingList;
