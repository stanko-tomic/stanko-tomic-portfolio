import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";

import stankoPic from "../../public/IMG_3261.jpg";
import cvPic from "../../public/cv.png";
import mockupPic from "../../public/ciphers-mockup.png";

export const AboutMe = () => {
  return (
    <section className="mt-24 mb-24 ml-auto mr-auto">
      <div className="max-w-[1200px] p-8 gap-12 lg:gap-0 grid lg:grid-cols-2 grid-cols-1 mx-auto items-center">
        <div>
          <h2 className="uppercase text-white text-2xl font-semibold mb-4">
            A BIT ABOUT ME
          </h2>
          <p className="text-slate-400 font-light text-[2rem]">
            I am a Web Developer specializing in Frontend and Backend
            technologies such as{" "}
            <span className="font-semibold text-white">
              React, NextJS, NodeJS, Express.
            </span>
          </p>

          <div className="flex flex-row gap-8 items-center mt-4">
            <a
              href="/stanko_tomic_CV.pdf"
              className="rounded-full px-7 py-2 text-sm font-medium border border-gray-200 hover:border-gray-500 uppercase transition"
            >
              Download CV
            </a>

            <div className="flex flex-row gap-4 items-center">
              <a href="https://github.com/stanko-tomic/">
                <AiFillGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/stanko-tomic-4687321b9/">
                <AiFillLinkedin size={28} />
              </a>
              <a href="mailto:stankotomic7@gmail.com">
                <AiFillMail size={28} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <Image
                className="min-h-[20rem] object-cover objec block max-h-[24rem] rounded-lg"
                src={stankoPic}
                width={384}
                height={684}
                placeholder="blur"
                alt="Stanko Tomic"
              />
            </div>
            <div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  className="object-cover block min-h-[20rem] max-h-[24rem] rounded-lg"
                  src={mockupPic}
                  placeholder="blur"
                  alt="Mockup"
                />
                <Image
                  className="min-h-[20rem] object-cover block max-h-[24rem] rounded-lg"
                  src={cvPic}
                  placeholder="blur"
                  alt="CV"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
