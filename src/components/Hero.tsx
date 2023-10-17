import { IoIosArrowDown } from "react-icons/io";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export const Hero = () => {
  return (
    <section className="h-[calc(100vh-100px)] relative min-h-[300px]">
      <div className="flex items-center flex-col justify-center h-full">
        <h1 className="text-4xl lg:text-[3.5rem] text-slate-400 lg:leading-[4.5rem] font-light text-center">
          I’m a <span className="font-semibold text-white">Web Developer</span>{" "}
          specializing in <br />
          Frontend and Backend Technologies
        </h1>

        <div className="flex flex-col gap-4 items-center mt-10 md:mt-18 lg:mt-28 ">
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
        <div className="absolute bottom-5">
          <IoIosArrowDown size={24} color={"white"} />
        </div>
      </div>
    </section>
  );
};
