import { BsAmd } from "react-icons/bs";

import Heading from "../../../globalComponents/molecules/Heading";
import ReadMore from "./../../../globalComponents/molecules/ReadMore";

// import MISSION_IMG from "../../../../assets/mission.png";
import "./ourMission.css";

const OurMission = ({ data }) => {
  const { Our_Mission_Title, Our_Mission_Description, Our_Mission_Image } =
    data;
  const mission_Image = Our_Mission_Image?.data?.attributes?.url;

  const [title, description, MISSION_IMG] = [
    Our_Mission_Title,
    Our_Mission_Description,
    mission_Image,
  ];
  return (
    <div>
      <div className="container">
        <div className="row center-item mtb">
          <div className="col-md-6">
            <div className="missionSecBg1">
              <Heading
                text={title}
                color="#000"
                fontWeight="700"
                fontSize="36px"
                className="mission-title"
              />
              <p className="missionpara">
                {/* {description?.map((item, idx) => (
                  <CkEditorContentDisplay key={idx} content={item} />
                ))} */}

                <ReadMore
                  ckEditorDescription={description}
                  lineHeight={"15rem"}
                  showLine="5"
                  btnStyle={{
                    color: "#7b6fe7",
                  }}
                />

                <div>
                  <BsAmd
                    className="icon iconPlacement"
                    size={112}
                    color={"#7B6FE7"}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <center className="giphyBg1">
              <img className="bg-mission" alt="" src={MISSION_IMG} />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurMission;
