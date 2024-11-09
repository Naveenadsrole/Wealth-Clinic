import AWARD_IMG from "../../../assets/homePic/award.png";
import SQUARE_FT_IMG from "../../../assets/homePic/squareft-deliver.png";
import HAPPY_CUSTOMER_IMG from "../../../assets/homePic/happy family .png";
import REAL_ESTATE_IMG from "../../../assets/homePic/real-est.png";
// import GoogleReview from "../../../assets/google-review.svg";
import "./style.css";

const MileStones = () => {
  return (
    <section className="container rounded-5 mt-5">
      <div className="raw achievements rounded-5">
        <div className="col-md-3 ">
          <img src={AWARD_IMG} alt="" />
          <h4 className="achievementsImgText">
            Best Real Estate
            <br /> Agency Since 2012
          </h4>
        </div>

        <div className="col-md-3">
          <img src={HAPPY_CUSTOMER_IMG} alt="" />
          <h4 className="achievementsImgText">15K+ Happy Families</h4>
        </div>

        <div className="col-md-3">
          <img src={SQUARE_FT_IMG} alt="" />
          <h4 className="achievementsImgText">
            15 Million Sq Ft Space Delivered
          </h4>
        </div>

        <div className="col-md-3">
          <img src={REAL_ESTATE_IMG} alt="" />
          <h4 className="achievementsImgText">
            15+ Commercial & Residential
            <br /> Projects Delivered
          </h4>
        </div>
      </div>
    </section>
  );
};

export default MileStones;
