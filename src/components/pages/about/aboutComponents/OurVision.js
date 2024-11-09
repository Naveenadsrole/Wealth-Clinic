import { TbDeviceVisionPro } from "react-icons/tb";

import Heading from "../../../globalComponents/molecules/Heading";
import CkEditorContentDisplay from "../../../globalComponents/CkEditorContentDisplay/CkEditorContentDisplay";

// import VISSION_IMG from "../../../../assets/vission.png";
import "./ourVision1.css";

const OurVision = ({ data }) => {
  const { Our_Vision_Title, Our_Vision_Description, Our_Vision_Image } = data;
  const vision_Image = Our_Vision_Image?.data?.attributes?.url;

  const [title, description, img] = [
    Our_Vision_Title,
    Our_Vision_Description,
    vision_Image,
  ];
  return (
    <div>
      <div className="container">
        <div className="row center-item mtb">
          <div className="col-md-6">
            <center className="giphyBg">
              <img className="bg-vision" alt="" src={img} />
            </center>
          </div>
          <div className="col-md-6">
            <div className="visionSecBg1">
              <Heading
                text={title}
                color="#000"
                fontWeight="700"
                fontSize="36px"
                className="vision-title"
              />
              <p className="visionpara">
                {description?.map((item, idx) => (
                  <CkEditorContentDisplay key={idx} content={item} />
                ))}

                <div>
                  <TbDeviceVisionPro
                    className="icon iconPlacement"
                    size={112}
                    color={"#E28A7C"}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurVision;
