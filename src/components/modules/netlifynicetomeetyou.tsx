import { MoveUpRight, Rocket } from "lucide-react";
import { Buttons } from "./profiledata";
import ContinueDeployButton from "../continue-deploy-button";

interface NetlifynicetomeetyouProps {
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTeamChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCastChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cast: string;
  team: string;
  name: string;
  setPlanning: (button: string) => void;
  setSite: (button: string) => void;
  setRole: (button: string) => void;
}

const Netlifynicetomeetyou = ({
  team,
  cast,
  handleCastChange,
  handleNameChange,
  handleTeamChange,
  name,
  setPlanning,
  setSite,
  setRole,
}: NetlifynicetomeetyouProps) => {
  return (
    <div className="lg:col-span-8">
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-semibold">
            Nice to meet you! Let's get acquainted.
          </h1>
          <h2 className="text-[30px] mt-10 font-semibold">
            What is your name?
          </h2>

          <div className="">
            <div className="mt-5">
              <label
                htmlFor=""
                className="block mb-1 text-[15px] font-semibold text-gray-700"
              >
                First Name
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                className="lg:w-80 w-68 px-4 p-1.5 text-lg rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="First Name"
                type="text"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor=""
                className="block mb-1 text-[15px] font-semibold text-gray-700"
              >
                Last Name
              </label>
              <input
                value={cast}
                onChange={handleCastChange}
                className="lg:w-80 w-68 px-4 p-1.5 text-lg rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <p className="italic mt-3 text-[15px]">
            <i className="fas fa-info-circle text-gray-600 mr-2"></i>Required
            fields
          </p>

          <div className="">
            <h1 className="text-[30px] mt-10 font-semibold">
              How are you planning to use Netlify?
            </h1>
            <div className="md:flex md:flex-wrap grid grid-cols-2 items-center gap-4 mt-4">
              {Buttons.planningButtons.map((button) => (
                <button
                  onClick={() => setPlanning(button)}
                  className="font-[500] focus:outline-none focus:border-none focus:ring-2 focus:ring-teal-600 border-2 cursor-pointer flex flex-wrap items-center justify-center hover:bg-gray-100 border-gray-300 rounded-sm h-15 px-12 "
                >
                  {button}
                </button>
              ))}
            </div>
            <p className="italic mt-3 text-[15px]">
              <i className="fas fa-info-circle text-gray-600 mr-2"></i>
              Required fields
            </p>
          </div>

          <div className="">
            <h1 className="text-[30px] mt-10 font-semibold">
              What kind of site do you want to build first?
            </h1>
            <div className="xl:flex xl:flex-wrap grid grid-cols-2 md:grid-cols-3  items-center gap-4 mt-6 mr-5">
              {Buttons.siteButtons.map((button) => (
                <button
                  key={button}
                  onClick={() => setSite(button)}
                  className="font-[500] focus:outline-none focus:border-none focus:ring-2 focus:ring-teal-600 border-2 cursor-pointer flex items-center justify-center hover:bg-gray-100 border-gray-300 rounded-sm h-17 px-18 py-2"
                >
                  {button}
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <h1 className="text-[30px] mt-10 font-semibold">
              What best describes your role?
            </h1>
            <div className="xl:flex xl:flex-wrap grid grid-cols-2 md:grid-cols-3  items-center gap-4 mt-6 mr-5">
              {Buttons.roleButtons.map((button) => (
                <button
                  key={button}
                  onClick={() => setRole(button)}
                  className="font-[500] focus:outline-none focus:border-none focus:ring-2 focus:ring-teal-600 border-2 cursor-pointer flex items-center justify-center hover:bg-gray-100 border-gray-300 rounded-sm h-17 px-18 py-2"
                >
                  {button}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-[30px] mt-6 font-semibold">
              What is the name of your team?
            </h1>
            <label
              htmlFor=""
              className="block mb-2 mt-5 text-[15px] font-semibold text-gray-700"
            >
              Name your team
            </label>
            <input
              value={team}
              onChange={handleTeamChange}
              className="lg:w-80 w-68 px-4 p-1.5 text-lg rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Project name or user name"
              type="text"
            />

            <p className="mt-4 flex">
              <Rocket className="h-6 w-4 mr-2" />
              <span className="flex items-center text-gray-700 text-[25px">
                People who use netlify for personal work often use a project
                name or their own name.
              </span>
            </p>
            <h1 className="border broder-b-1 border-gray-200 w-[94%] mt-18 mb-8"></h1>
          </div>
        </div>
        <div className="md:block hidden">
          <ContinueDeployButton />
        </div>
      </div>
    </div>
  );
};

export default Netlifynicetomeetyou;
