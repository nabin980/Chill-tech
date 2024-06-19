import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import video1 from "../assets/1.mp4";
import logophoto from "../assets/techlogo.png";
import video2 from "../assets/2.mp4";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading className="text-sky-400 "title="Fly with Chill Tech" text="Welcome to AI Era." />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="object-cover w-full h-full md:object-right fill-white brightness-75"
                width={800}
                alt="Welcome to AI era"
                height={730}
                src={logophoto}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto backdrop-blur-sm p-5 rounded text-sky-600">
              <h4 className="mb-4 h4">AI Marketing</h4>
              <p className="body-2 mb-[3rem] ">
                Digital marketing is dead, AI marketing is what survives.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute border left-4 right-4 bottom-4 border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative grid gap-5 z-1 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                {/* <img
                  src={service2}
                  className="object-cover w-full h-full"
                  width={630}
                  height={750}
                  alt="robot"
                /> */}

                <video
                  src={video1}
                  autoPlay
                  loop
                  muted
                  className="object-cover w-full h-full"
                  width={630}
                  height={750}
                ></video>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="mb-4 h4">Branding</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Fly with Chill Tech, and let&apos;s
                shape the future of your brand together
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 creative-content rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="mb-4 h4">Creative Content</h4>
                <p className="body-2 mb-[2rem] ">
                Stay ahead of the curve with Chill Tech, where creativity meets trending market insights. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-sky-600 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-sky-600 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                {/* <img
                  src={service3}
                  className="object-cover w-full h-full"
                  width={520}
                  height={400}
                  alt="Scary robot"
                /> */}
                <video
                  src={video2}
                  autoPlay
                  loop
                  muted
                  className="object-cover w-full h-full brightness-75"
                  width={520}
                  height={400}
                  alt="video 2"
                ></video>

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
