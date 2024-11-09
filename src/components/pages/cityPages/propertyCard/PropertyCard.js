import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";

import Heading from "../../../globalComponents/molecules/Heading";

// import { IMG_1 } from "../../../../assets/IMG";
import { generatePropertyDetailsURL } from "./../../../../helpers/getRedirectUrl";
import { formatIndianCurrency } from "../../../../helpers/helper";
import "./propertyCard.css";

export const PropertyCard = ({ propertyInfo, cityName }) => {
  const {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
  } = propertyInfo?.attributes;
  const img = Image?.data[0]?.attributes?.url;

  const propertyId = propertyInfo?.id;
  const configurations = Project_Configuration.split(" | ");
  const maxPrice = formatIndianCurrency(Max_Price);
  const minPrice = formatIndianCurrency(Min_Price);

  return (
    <div className="city-cards">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5">
          <div className="city-image-card h-100 p-0 m-0">
            <img className="card-city-img" src={img} alt="" />
          </div>
        </div>

        <div className="col-lg-7 col-md-7  col-sm-7">
          <div className="card-main-head">
            {Project_Name} <RiAttachment2 />
          </div>
          <p className="card-city-sec-1">
            <IoBedOutline />
            {Address}
          </p>
          <p className="card-city-price-1">
            <FaRupeeSign />
            {minPrice} - {maxPrice}
          </p>
          <hr></hr>
          <div>
            {configurations?.map((item, idx) => (
              <TagBtn key={idx} text={item} />
            ))}
          </div>
          <hr></hr>
          <p className="city-details-desc">
            <Heading
              text={Project_Disclaimer}
              color={"444"}
              fontSize=".75rem"
            />
          </p>

          <div class="row  properties-card-btn-container">
            <button className="col-lg-2 col-md-2 col-sm-2 col-xs-1 col-2 whatsapp-btn">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
            <button class="col-lg-6 col-md-6 col-sm-6 col-xs-7 mx-3  col-6 properties-detail">
              <Link
                to={generatePropertyDetailsURL(cityName, Project_Name)}
                state={{ propertyId }}
              >
                See Full details
              </Link>
            </button>
            <button class="col-lg-2 col-md-2 col-sm-2 col-xs-1 col-2 phone-btn">
              <i class="fa-solid fa-phone-flip"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

function TagBtn({ text }) {
  return (
    <button class="btn btn-sm btn-shadow-card btn-tab-font">{text}</button>
  );
}
