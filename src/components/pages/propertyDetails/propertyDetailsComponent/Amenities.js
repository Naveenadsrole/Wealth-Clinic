import Heading from "../../../globalComponents/molecules/Heading";

import Metro from "../../../../assets/Metro.png";
import Guard from "../../../../assets/Guard.png";
import Sports from "../../../../assets/Sports.png";
import BuildingFacility from "../../../../assets/BuildingFacility.png";

import "./amenities.css";

// const LOGO =
//   "https://static.squareyards.com/assets/images/svg/amenities/safety/am-ico-cctvvide-active.svg";

const Amenities_Data = [
  {
    title: "Safety",
    img: Guard,
    categories: [
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/safety/am-ico-24x7secu-active.svg",
        title: "24 x 7 Security",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/safety/am-ico-intercom-active.svg",
        title: "Intercom Facility",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/safety/am-ico-firefigh-active.svg",
        title: "Fire Fighting Systems",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/safety/am-ico-cctvvide-active.svg",
        title: "CCTV / Video Surveillance",
      },
    ],
  },

  {
    title: "Convenience",
    img: BuildingFacility,
    categories: [
      {
        img: Metro,
        title: "Metro",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/convenience/am-ico-guesthou-active.svg",
        title: "Guest House",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/convenience/am-ico-petarea-active.svg",
        title: "Pet Area",
      },

      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/convenience/am-ico-lift-active.svg",
        title: "Lift",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/convenience/am-ico-powerbac-active.svg",
        title: "Power Backup",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/convenience/am-ico-treatedw-active.svg",
        title: "Treated Water Supply",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-kidsplay-active.svg",
        title: "Park",
      },
    ],
  },

  {
    title: "Sports",
    img: Sports,
    categories: [
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-gymnasiu-active.svg",
        title: "Gymnasium",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-swimming-active.svg",
        title: "Swimming Pool",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-skatingr-active.svg",
        title: "Skating Rink",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-kidspool-active.svg",
        title: "Kids' Pool",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-badminto-active.svg",
        title: "Badminton Court(s)",
      },
      {
        img: "https://static.squareyards.com/assets/images/svg/amenities/sports/am-ico-joggingc-active.svg",
        title: "Jogging / Cycle Track",
      },
    ],
  },
];

const Amenities = ({ data }) => {
  // const Amenities_Data1 = data?.amenities?.data;
  // const {Title,amenity_category} =Amenities_Data1[0]?.attributes?.Title
  return (
    <div className="container">
      {Amenities_Data?.map((ele, idx) => {
        return (
          <div className="row" key={idx}>
            <div className="col-md-3 center-item border">
              <AmenitiesBox title={ele?.title} img={ele?.img} />
            </div>
            <div className="col-md-9 border ">
              <AmenitiesDetails data={ele?.categories} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Amenities;

function AmenitiesBox({ title, img }) {
  return (
    <div className="amenitiesBox">
      {/* Safety */}
      <div className="amenitiesImgBox">
        <img src={img} alt="" />
      </div>
      <Heading fontSize="0.75rem" fontWeight="700" text={title} />
    </div>
  );
}

function AmenitiesDetails({ data }) {
  // console.log(data);
  return (
    <div className="row amenitiesDetailsBox">
      {data.map((item, idx) => {
        return (
          <div className=" col-md-4 p-2 amenitiesDetailsImgBox" key={idx}>
            <img src={item?.img} alt="" className="col-md-2" />
            <div className="col-md-10">{item?.title}</div>
          </div>
        );
      })}
    </div>
  );
}
