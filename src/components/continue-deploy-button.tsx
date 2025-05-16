import { MoveUpRight } from "lucide-react";

const ContinueDeployButton = () => {
  return (
    <div>
      <button className="cursor-pointer bg-teal-300 px-7 py-2 text-[19px] rounded-lg font-semibold mb-5 hover:bg-teal-400">
        Continue to deploy
      </button>

      <div className="flex items-start">
        <i className="fas fa-info-circle text-gray-500 mr-2 text-[19px] mt-1.5"></i>
        <p className="text-[19px] pr-1 mb-20 flex flex-wrap">
          By submitting this form, you agree to Netlify's{" "}
          <span className="underline ml-2 cursor-pointer">Privacy Policy</span>{" "}
          <span>
            <MoveUpRight className="h-4 text-gray-500 mt-2 ml-2" />
          </span>
          and that Netlify can send your communications about its products and
          services.
        </p>
      </div>
    </div>
  );
};

export default ContinueDeployButton;
