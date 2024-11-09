import { useLocation } from "react-router-dom";
import PropertyDetailsCard from "./propertyDetailsComponent/PropertyDetailsCard";
import PropertyMenuDetails from "./propertyMenu/PropertyMenuDetails";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { getPropertyDetailsUrlById } from "../../../assets/constants/apiUrls";
import { EMPTY_OBJECT } from "../../../assets/constants";
import Header from "../../globalComponents/header/Header";
import "./propertyDetails.css";

const PropertyDetails = () => {
  const location = useLocation();
  const { propertyId } = location?.state;

  const [propertyDetails, error, isLoading] = useApiFetcher(
    getPropertyDetailsUrlById(propertyId)
  );

  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!propertyDetails) return <div>No Data</div>;

  const propertyParams = propertyDetailsParam(propertyDetails);

  return (
    <section className="container-fluid">
      <Header className="headerStyle" />

      <PropertyDetailsCard propertyDetail={propertyParams} />
      <div className="row PropertyMenuDetails-container  px-5">
        <div className="col-lg-12 mb-5 property-menu-container py-3">
          <PropertyMenuDetails />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;

export function propertyDetailsParam(propertyDetails) {
  const {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
  } = propertyDetails?.attributes || EMPTY_OBJECT;
  return {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
  };
}
