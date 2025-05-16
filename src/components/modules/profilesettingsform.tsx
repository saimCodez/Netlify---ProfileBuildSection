import { useState } from "react";
import Netlifynicetomeetyou from "./netlifynicetomeetyou";
import { Profilecard } from "./profilecard";
import { Container } from "../Container";
import ContinueDeployButton from "../continue-deploy-button";

export const Profilesettings = () => {
  const [name, setName] = useState<string>("");
  const [cast, setCast] = useState<string>("");
  const [planning, setPlanning] = useState<string>("");
  const [site, setSite] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [team, setTeam] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleCastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCast(event.target.value);
  };
  const handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeam(event.target.value);
  };

  return (
    <div className="bg-white min-h-screen">
      <Container>
        <div className="netlify-logo w-50 my-10">
          <img src="/public/NetlifyLogo.png" alt="" />
        </div>

        <div className="profile-Settings flex flex-col lg:grid lg:grid-cols-12 lg:py-10">
          <Netlifynicetomeetyou
            cast={cast}
            handleNameChange={handleNameChange}
            handleTeamChange={handleTeamChange}
            setPlanning={setPlanning}
            setSite={setSite}
            setRole={setRole}
            name={name}
            team={team}
            handleCastChange={handleCastChange}
          />
          <div className="flex md:block flex-col-reverse">
            <div className="md:hidden block">
              <ContinueDeployButton />
            </div>
            <Profilecard
              values={{
                cast,
                name,
                planning,
                role,
                site,
                team,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
