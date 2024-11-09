import ReadMore from "../../../globalComponents/molecules/ReadMore";
import Heading from "../../../globalComponents/molecules/Heading";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import { getFullUrl, API_URL } from "../../../../assets/constants/apiUrls";
import CircleBgPic from "../../../../assets/cricle_bg.png";
// import ReadMore from "../../../globalComponents/molecules/ReadMore";
import "../ourTeamComponents/ourTeam.css";

const OurTeamTitle = () => {
  const url = getFullUrl(`${API_URL.ABOUT_US}${API_URL.POPULATE}`);

  const [ourTeam, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const {
    Owner_Name,
    Owner_Designation,
    Full_Description,
    Owner_Name_2,
    Owner_Designation_2,
    Full_Description_2,
  } = ourTeam?.attributes;

  return (
    <>
      <div className="row center-item top-bottom-team">
        <div className="col-md-6">
          <img
            className="ourTeam1"
            alt=""
            src="https://wealth-clinic.com/public/frontend/images/amit_raheja.jpg"
          />
        </div>
        <div className="col-md-6">
          <div className="bgDirector">
            <img className="ourTeambgImg" alt="" src={CircleBgPic} />
            <Heading
              text={Owner_Name}
              color="#000"
              fontWeight="700"
              className="OurTeamtitle"
            />

            <p className="desgination">
              <Heading
                text={Owner_Designation}
                fontSize="20px"
                fontWeight="350"
                color="#000"
                lineHeight="1.5"
                className="bor-down"
              />
            </p>
            {/* <p className="fullDescription">{Full_Description}</p> */}
            <ReadMore
              btnStyle={{ color: "#00ffff", margin: "0 0 2rem 1.5rem " }}
              text={Full_Description}
              className="fullDescription"
              lineHeight={"1.19rem"}
              showLine={10}
              fontSize={"15px"}
            />
          </div>
        </div>
      </div>

      <div className="row center-item top-bottom-team">
        <div className="col-md-6">
          <div className="bgDirector pb-3">
            <img className="ourTeambgImg1" alt="" src={CircleBgPic} />
            <Heading
              text={Owner_Name_2}
              color="#000"
              fontWeight="700"
              className="OurTeamtitle"
            />

            <p className="desgination">
              <Heading
                text={Owner_Designation_2}
                fontSize="21px"
                fontWeight="350"
                color="#000"
                lineHeight="1.5"
                className="bor-down"
              />
            </p>
            {/* <p className="fullDescription">{Full_Description_2}</p> */}

            <ReadMore
              btnStyle={{ color: "#00ffff", margin: "0 0 1rem 1.5rem " }}
              text={Full_Description_2}
              className="fullDescription"
              lineHeight={"1.19rem"}
              showLine={10}
              fontSize={"15px"}
            />
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="ourTeam1"
            alt=""
            src="https://wealth-clinic.com/public/frontend/images/sumit_raheja.jpg"
          />
        </div>
      </div>
    </>
  );
};
export default OurTeamTitle;
