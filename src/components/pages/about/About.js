import AboutWC from "./aboutComponents/AboutWC";
import OurMission from "./aboutComponents/OurMission";
import OurVision from "./aboutComponents/OurVision";
// import NewFourPillars from "./../about/aboutComponents/NewFourPillars";
import OurTeamTitle from "./../ourTeam/ourTeamComponents/OurTeamTitle";
import TeamMembersCard from "./aboutComponents/TeamMembersCard";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { getFullUrl, API_URL } from "../../../assets/constants/apiUrls";
import CircularCards from "./aboutComponents/CircularCards";

const url = getFullUrl(`${API_URL.ABOUT_US}${API_URL.POPULATE}`);

const About = () => {
  const [aboutUs, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const {
    AboutUs_Heading,
    AboutUs_Description,
    AboutUs_Image,
    Our_Mission_Title,
    Our_Mission_Description,
    Our_Mission_Image,
    Our_Vision_Title,
    Our_Vision_Description,
    Our_Vision_Image,
  } = aboutUs?.attributes;

  return (
    <div>
      <div className="container-fluid">
        <div className="row p-0 m-0">
          <AboutWC
            data={{ AboutUs_Heading, AboutUs_Description, AboutUs_Image }}
          />
          <OurMission
            data={{
              Our_Mission_Title,
              Our_Mission_Description,
              Our_Mission_Image,
            }}
          />
          <OurVision
            data={{
              Our_Vision_Title,
              Our_Vision_Description,
              Our_Vision_Image,
            }}
          />
          {/* <NewFourPillars /> */}
          <CircularCards />
        </div>
        <div className="container">
          <OurTeamTitle />
          <TeamMembersCard />
        </div>
      </div>
    </div>
  );
};
export default About;
