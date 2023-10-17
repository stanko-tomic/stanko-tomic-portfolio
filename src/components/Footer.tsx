import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="w-full my-20 flex flex-row items-center justify-center">
      <div>
        <div className="mb-8">
          <h4 className="text-5xl font-light text-gray-500">
            Get <span className="font-semibold text-white">in Touch.</span>
          </h4>
          <p className="text-lg font-light text-center">
            You can contact me here...
          </p>
        </div>

        <div className="flex flex-row items-center w-full justify-center gap-2 mb-8">
          <a href="#">
            <AiFillGithub size={28} />
          </a>
          <a href="#">
            <AiFillLinkedin size={28} />
          </a>
          <a href="#">
            <AiFillMail size={28} />
          </a>
        </div>

        <div>
          <p className="text-center font-light">
            Made with ❣️ by{" "}
            <span className="font-semibold text-white">Stanko Tomic</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
