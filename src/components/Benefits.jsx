import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Experience Efficiency and Ease, Choose Chill Tech"
        />

        <div className="flex flex-wrap gap-10 mb-10  place-content-center">
          {benefits.map((item) => (
            <div
              className="block rounded-lg bg-sky-950 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:scale-105 transition ease-in-out delay-80"
              // style={{
              //   backgroundImage: `url(${item.backgroundUrl})`,
              // }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[14rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 h5">{item.title}</h5>
                <p className="mb-6 body-2 ">{item.text}</p>
                {/* <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />

                  <p className="ml-auto text-xs font-bold tracking-wider uppercase pointer-events-auto font-code text-n-1">
                    <a
                      href={item.address}
                      target="_blank"
                      className="flex items-center"
                    >
                      Explore more
                      <Arrow />
                    </a>
                  </p>
                </div> */}
              </div>

              {/* {item.light && <GradientLight />} */}

              <div
                className="absolute backdrop-blur-xl bg-white/10"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-20">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
