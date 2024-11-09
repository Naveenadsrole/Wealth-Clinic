import { MdRoundaboutRight } from "react-icons/md";

import ReadMore from "../../../globalComponents/molecules/ReadMore";
import Heading from "../../../globalComponents/molecules/Heading";

import "./aboutWC.css";

const AboutWC = ({ data }) => {
  const { AboutUs_Heading, AboutUs_Description, AboutUs_Image } = data;
  const about_Image = AboutUs_Image?.data?.attributes?.url;

  const [title, description, img] = [
    AboutUs_Heading,
    AboutUs_Description,
    about_Image,
  ];

  return (
    <div>
      <div className="container">
        <div className="row center-item mtb">
          <div className="col-md-7">
            <center>
              <img className="Wc-mission" alt="" src={img} />
            </center>
          </div>
          <div className="col-md-5">
            <div className="WcSecBg1">
              <Heading
                text={title}
                color="#000"
                fontWeight="700"
                fontSize="36px"
                className="Wc-title"
              />
              <p className="Wcpara">
                {/* {description?.map((item, idx) => (
                  <CkEditorContentDisplay key={idx} content={item} />
                ))} */}
                <ReadMore
                  ckEditorDescription={description}
                  lineHeight={"19.18rem"}
                  showLine="5"
                  btnStyle={{
                    color: "#72a081",
                  }}
                />

                <div>
                  <MdRoundaboutRight
                    className="icon iconPlacement"
                    size={0}
                    color={"#72A081"}
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
export default AboutWC;
