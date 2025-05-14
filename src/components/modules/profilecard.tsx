import { Laptop, User, Wrench } from "lucide-react";

interface ProfileCardProps {
  values: {
    planning: string;
    team: string;
    name: string;
    cast: string;
    site: string;
    role: string;
  };
}

export const Profilecard = ({
  values: { cast, name, role, planning, site, team },
}: ProfileCardProps) => {
  return (
    <div className="profile-Card col-span-4 block sticky top-10 shadow shadow-md  h-165  border border-gray-400 rounded-xl">
      <div className="card">
        <div
          className={`h-38 ${
            planning
              ? "bg-gradient-to-r from-emerald-700 to-amber-300 rounded-t-xl"
              : "bg-gray-100"
          }`}
        >
          <h1 className="text-4xl font-semibold text-white flex items-center py-14 pl-7">
            {team}
          </h1>
        </div>

        <div className="bg-white p-7 gap-5">
          <div className="gap-5">
            <p className="font-bold text-[22px] mb-3">
              {name} {cast}
            </p>
          </div>
          <p className="font-semibold text-lg">saim.tauseef27@gmail.com</p>
          {planning && (
            <div className="flex items-center gap-2 mt-4">
              <Laptop className="w-6 h-5" />
              <span>Netlify for</span>
              <span className="font-bold">{planning}</span>
            </div>
          )}
          {site && (
            <div className="flex items-center gap-2 mt-3">
              <Wrench className="w-6 h-5" />
              <span>Building a</span>
              <span className="font-bold">{site}</span>
            </div>
          )}
          {role && (
            <div className="flex items-cente gap-2 mt-3">
              <User />
              <span className="">{role}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
