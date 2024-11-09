import { IoBedOutline } from "react-icons/io5";
// import { FaRupeeSign } from "react-icons/fa";

import Heading from "../../../globalComponents/molecules/Heading";

import { formatIndianCurrency } from "../../../../helpers/helper";
import { EMPTY_OBJECT } from "../../../../assets/constants/index";
import "./propertyTextContent.css";

const PropertyTextContent = ({ propertyDetail }) => {
  const { Project_Name, Min_Price, Max_Price, Project_Disclaimer, Address } =
    propertyDetail || EMPTY_OBJECT;

  const maxPrice = formatIndianCurrency(Max_Price);
  const minPrice = formatIndianCurrency(Min_Price);

  return (
    <div className="col-lg-12 col-md-12  col-sm-12 propertyTextContent-container">
      <div className="card-main-head">{Project_Name}</div>

      <p className="card-city-sec-1">
        <IoBedOutline /> {Address}
      </p>

      <div className="row configuration-container">
        <div className="col-md-2 p-0">
          <img
            src="https://www.wealth-clinic.com/frontend/images/property/Icon%203.png"
            alt=""
          />
        </div>
        <div className="col-md-10 p-0">
          <Heading
            text="Configurations"
            color="#888"
            fontSize="14px"
            fontWeight="600"
          />

          <Heading
            text=" Retail Shop from 170 Sq. Ft. to 350 Sq. Ft."
            fontSize="0.75rem"
            className="py-1"
          />
        </div>
      </div>
      <p className="card-city-price-1">
        {/* <FaRupeeSign />  */}₹ {minPrice} - ₹ {maxPrice}
      </p>

      <p className="city-details-desc">
        <Heading
          text={Project_Disclaimer}
          color={"444"}
          fontSize=".75rem"
          lineHeight="1.2rem"
          showLine="3"
        />
      </p>

      <div class="row  properties-card-btn-container">
        <button className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 whatsapp-btn ">
          <span className="mx-2 text-white-8">172 Views</span>
          <i class="bi bi-eye"></i>
        </button>

        <button class="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 phone-btn ">
          <span className="mx-2 text-white-8">0 Enquiries</span>
          <i class="bi bi-headphones"></i>
        </button>

        <button class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 phone-btn 2 my-3">
          <span className="mx-2 text-white-8">Get a call back</span>
          <i class="fa-solid fa-phone-flip"></i>
        </button>
      </div>
    </div>
  );
};

export default PropertyTextContent;
