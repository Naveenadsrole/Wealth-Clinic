import Heading from "../../../globalComponents/molecules/Heading";
import "./awardsCard.css";

const AwardCard = ({ data }) => {
  const { Award_Title, Award_Image } = data?.attributes;
  const img = Award_Image?.data?.attributes?.url;

  return (
    <div className="col-md-3 awardsCard">
      <div className="awardsCardImgBox">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <Heading
        text={Award_Title}
        fontSize="1rem"
        className="m-5 awardHeading"
        fontWeight="600"
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default AwardCard;
