import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import CustomDropDown from "./../../globalComponents/customDropDown/CustomDropDown";
import Heading from "../../globalComponents/molecules/Heading";
import PropertyForm from "./propertyCard/PropertyForm";
import { PropertyCard } from "./propertyCard/PropertyCard";

import useApiFetcher from "./../../../hooks/useApiFetcher";
import {
  API_URL,
  getFullUrl,
  // generatePropertiesOnSearchFilter,
  generateSearchedBarUrl,
  getSortQueryByField,
} from "../../../assets/constants/apiUrls";
import URL from "../../../assets/constants/url";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "./../../../assets/constants/index";
import "./cityPages.css";

const SORTED_BY_OPTIONS = {
  HIGH_PRICE: "High Price",
  LOW_PRICE: "Low Price",
};

const SORTED_BTN_LABELS = [
  SORTED_BY_OPTIONS.LOW_PRICE,
  SORTED_BY_OPTIONS.HIGH_PRICE,
];

const urlForAllProperties = getFullUrl(API_URL.PROPERTIES + API_URL.POPULATE);

const CityPages = () => {
  let { city: selectedCity } = useParams();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(null);
  const [apiUrl1, setApiUrl] = useState(urlForAllProperties);

  useEffect(() => {
    const { pathname, state } = location;
    let initialApiUrl;
    initialApiUrl = urlForAllProperties;

    if (pathname === URL.SEARCH && state) {
      const { cityName, selectType, budget } = state || EMPTY_OBJECT;
      initialApiUrl = generateSearchedBarUrl(
        cityName || EMPTY_ARRAY,
        selectType || EMPTY_ARRAY,
        budget || EMPTY_ARRAY
      );
    }
    if (selectedCity && selectedCity !== "properties") {
      initialApiUrl = generateSearchedBarUrl([selectedCity]);
    }

    return setApiUrl(initialApiUrl);
  }, [selectedCity, location]);

  useEffect(() => {
    if (order) {
      const sortedParams = { sortBy: "Min_Price", order };
      const sortedField = getSortQueryByField(sortedParams);

      setApiUrl((prevUrl) => `${prevUrl}${sortedField}`);
    }
  }, [order]);

  console.log(location?.state, apiUrl1, order);
  const [properties, error, isLoading] = useApiFetcher(apiUrl1);
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>{error?.message}</div>;
  if (!properties) return <div>No Data</div>;

  return (
    <section className="container-fluid p-5">
      <div className="col-md-7 ">
        <div className="row">
          <div className="col-md-2 border">
            <CustomDropDown
              text={"SORT BY"}
              selectType={"enabled"}
              data={SORTED_BTN_LABELS}
              styleMenu={{ height: "72px", width: "180px" }}
              children={<DropdownBtn value={setOrder} />}
              isDropDownOpen={open}
              setIsDropDownOpen={() => setOpen(!open)}
            />
          </div>

          <div className="col-md-2"></div>

          {selectedCity &&
            selectedCity !== "properties" &&
            selectedCity !== URL.SEARCH && (
              <div className="col-md-3 center-item">
                <Heading
                  text={`New Projects in ${selectedCity}`}
                  className="projectCount"
                  fontSize="0.75rem"
                />
              </div>
            )}

          {/* {city === undefined || (city === null && null)} */}
          <div className="col-md-3 center-item projectCount">
            Showing Total Projects {properties?.length}
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className=" col-lg-8 col-md-12  col-sm-12 col-xs-12 "
          // style={{ paddingRight: "4rem" }}
        >
          {properties?.map((property) => (
            <PropertyCard
              key={property?.id}
              cityName={selectedCity}
              propertyInfo={property}
            />
          ))}
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 px-5">
          <PropertyForm className={"p-2"} />
        </div>
      </div>
    </section>
  );
};

export default CityPages;

function DropdownBtn({ text, value: setValue }) {
  const { pathname } = useLocation();
  // console.log(pathname);
  const handleSortedBtn = () => {
    if (text === SORTED_BY_OPTIONS.LOW_PRICE) {
      return setValue("ASC");
    }
    if (text === SORTED_BY_OPTIONS.HIGH_PRICE) {
      return setValue("DESC");
    }
    return setValue(null);
  };
  return (
    <Link to={pathname} onClick={handleSortedBtn} className="del-underLine">
      {text}
    </Link>
  );
}
