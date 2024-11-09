import { useLocation } from "react-router-dom";
import { useState } from "react";

import Amenities from "../propertyDetailsComponent/Amenities";
import Brochure from "../propertyDetailsComponent/Brochure";
import FloorPlans from "../propertyDetailsComponent/FloorPlans";

import ContactExpertForm from "../../../contactExpertForm/ContactExpertForm";
import Overview from "../propertyDetailsComponent/Overview";
import PrizeList from "../propertyDetailsComponent/PrizeList";
import AboutBuilder from "../propertyDetailsComponent/AboutBuilder";
// import HeadLine from "../propertyDetailsComponent/HeadLine";
import Faqs from "../propertyDetailsComponent/Faqs";
import LocationMap from "../propertyDetailsComponent/LocationMap";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import { getPropertyPopulatedFieldsUrlById } from "./../../../../assets/constants/apiUrls";
import "./propertyMenuDetails.css";

const PropertyDetailsButtons = [
  "Overview",
  "Prize List",
  "Floor Plans",
  "Brochure",
  "Amenities",
  "Locations & Landmarks",
  "About Builder",
  "Faq's",
];

const componentMap = {
  Overview: Overview,
  Amenities: Amenities,
  Brochure: Brochure,
  "Floor Plans": FloorPlans,
  "Prize List": PrizeList,
  "About Builder": AboutBuilder,
  "Faq's": Faqs,
  "Locations & Landmarks": LocationMap,
};

const url = (propertyId) => {
  return getPropertyPopulatedFieldsUrlById(
    ["builder", "amenities", "Floor_Plan"],
    propertyId
  );
};

const PropertyMenuDetails = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");
  const GetComponent = componentMap[activeComponent];

  const handleEvent = (componentName) => {
    setActiveComponent(componentName);
  };

  const location = useLocation();
  const { propertyId } = location?.state;
  const [propertyDetails, error, isLoading] = useApiFetcher(url(propertyId));

  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!propertyDetails) return <div>No Data</div>;

  const description = propertyDetails?.attributes;

  return (
    <div className="property-menu-container">
      <div className="propertyMenuDetails">
        {PropertyDetailsButtons.map((ButtonsName, idx) => (
          <div key={idx} onClick={() => handleEvent(ButtonsName)}>
            {ButtonsName}
          </div>
        ))}
      </div>

      <div className="d-flex">
        <div className="col-md-8 propertyMenuDetails-content py-4 px-5  newBoxShadow">
          {GetComponent && <GetComponent data={description} />}
        </div>

        <div className="col-lg-4  center-item">
          <ContactExpertForm className="contactExpertFormWidth p-4" />
        </div>
      </div>
    </div>
  );
};

export default PropertyMenuDetails;
