import TextBg from "../../../globalComponents/molecules/TextBg";
import InfiniteSlides from "../../../globalComponents/slickCrousel/InfiniteSlides";
import PropertyTextContent from "./PropertyTextContent";

import { EMPTY_OBJECT } from "../../../../assets/constants";
import "./propertyDetailsCard.css";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1, // Number of slides to scroll per transition
  autoplay: true, // Set to true for automatic slide change
  autoplaySpeed: 1500,
  speed: 1000,
  lazyLoad: true,
  initialSlide: 2,
  arrows: true,
};

const PropertyDetailsCard = ({ propertyDetail }) => {
  const params = properDetailsCardParams(propertyDetail);
  const { Project_Name, Image } = propertyDetail;
  const SLIDES = Image?.data?.map((item) => ({ img: item?.attributes?.url }));

  return (
    <div className="row p-5 pb-3 ">
      <div className="d-flex justify-content-center">
        <TextBg
          text={Project_Name}
          fontSize="3rem"
          className="propertyName"
          fontWeight={800}
        />
        {/* <Heading text={Project_Name} className="pl-5" fontSize="2rem" /> */}
      </div>

      <div className="col-md-3 center-item">
        <PropertyTextContent propertyDetail={params} />
      </div>

      <div className="col-md-9 propertyDetailsCard-container">
        <InfiniteSlides
          settings={settings}
          data={SLIDES}
          className="propertyGallerySlider"
        />
        {/* <PropertyGalleryCard img={img} /> */}
      </div>
    </div>
  );
};

export default PropertyDetailsCard;

function properDetailsCardParams(property) {
  const {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
  } = property || EMPTY_OBJECT;

  return {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
  };
}

export function PropertyGalleryCard({ img }) {
  return (
    <>
      <div className="d-flex h-100">
        <div className="col-md-6 col-sm-12  propertyDetailsCard-main-img">
          <img alt="" src={img} className="col-md-12" />
        </div>
        <div className="col-md-6 col-sm-12 propertyDetailsCard-side-img">
          <div>
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6"
            />
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6 sideImg2"
            />
          </div>

          <div>
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6 "
            />
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6 sideImg4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
