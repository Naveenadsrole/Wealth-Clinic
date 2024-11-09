import { Checkbox } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

import CustomDropDown from "../globalComponents/customDropDown/CustomDropDown";
import DropDown from "../globalComponents/DropDown/DropDown";

import useApiFetcher from "./../../hooks/useApiFetcher";
import {
  CITY_NAME,
  BUILDING_BUDGET,
  COMMERCIAL_PROPERTY,
  RESIDENTIAL_PROPERTY,
} from "../../assets/IMG";
import { SORTED_BY_PROPERTY_TYPE } from "../../assets/constants/filters";
// import { EMPTY_OBJECT } from "./../../assets/constant/index";
import "./AdvancedSearchBar.css";

const DROP_DOWNS_TYPE = {
  cityName: [],
  selectType: [],
  budget: "",
};

const AdvancedSearchBar = () => {
  const [dropDownConfig, setDropDownConfig] = useState({
    cityName: false,
    selectType: false,
    budget: false,
  });
  const [dropDownValue, setDropDownValue] = useState(DROP_DOWNS_TYPE);
  const keys = Object.keys(DROP_DOWNS_TYPE);

  const [radioBtnValue, setRadioBtnValue] = useState(null);

  // const handleSearchBtn = () => {
  //   console.log(dropDownValue);
  //   const {
  //     cityName = "",
  //     selectType = "",
  //     budget = "",
  //   } = dropDownValue || EMPTY_OBJECT;
  //   return { cityName, selectType, budget };
  // };
  // console.log("final", dropDownValue);

  console.log(dropDownValue);

  const getProperty = () => {
    if (radioBtnValue === SORTED_BY_PROPERTY_TYPE.COMMERCIAL) {
      return COMMERCIAL_PROPERTY;
    }
    if (radioBtnValue === SORTED_BY_PROPERTY_TYPE.RESIDENTIAL) {
      return RESIDENTIAL_PROPERTY;
    }
    return null;
  };

  return (
    <header className="my-2 d-flex advancedSearchBar ">
      <div className="col-md-5 d-flex">
        <div className="col-md-4 mr-3">
          <CustomDropDown
            data={CITY_NAME}
            styleMenu={{ width: "150px" }}
            text={"Select City"}
            children={<SearchDropDownButtons />}
            isDropDownOpen={dropDownConfig.cityName === true}
            setIsDropDownOpen={() =>
              setDropDownConfig({
                cityName: !dropDownConfig.cityName,
                selectType: false,
                budget: false,
              })
            }
            dropDownValueKeyName={keys[0]}
            setDropDownValue={setDropDownValue}
          />
        </div>

        <div className="col-md-3 mr-3 border">
          <DropDown
            getValue={setRadioBtnValue}
            children={
              <CustomDropDown
                data={getProperty()}
                styleMenu={{ width: "164px" }}
                text={"Type"}
                isDropDownOpen={dropDownConfig.selectType}
                setIsDropDownOpen={() =>
                  setDropDownConfig({
                    cityName: false,
                    selectType: !dropDownConfig.selectType,
                    budget: false,
                  })
                }
                children={<SearchDropDownButtons />}
                dropDownValueKeyName={keys[1]}
                setDropDownValue={setDropDownValue}
              />
            }
          />
        </div>

        <div className="col-md-5 border">
          <CustomDropDown
            data={BUILDING_BUDGET}
            selectType={"enabled"}
            styleMenu={{ width: "150px" }}
            text={"Select Budget"}
            isDropDownOpen={dropDownConfig.budget}
            setIsDropDownOpen={() =>
              setDropDownConfig({
                cityName: false,
                selectType: false,
                budget: !dropDownConfig.budget,
              })
            }
            dropDownValueKeyName={keys[2]}
            setDropDownValue={setDropDownValue}
          />
        </div>
      </div>

      <SearchSuggestionBar />

      <div className="col-md-1 btn-width">
        <button
          className="fw-bold text-white filterSearchBtn"
          style={{ background: "var(--global-text-color)" }}
          // onClick={handleSearchBtn}
        >
          <Link to={"/search"} state={dropDownValue} className="searchBtn">
            Search
          </Link>
        </button>
      </div>
    </header>
  );
};

export default AdvancedSearchBar;

export function SearchDropDownButtons({ className, text }) {
  const [checked, setChecked] = useState(false);
  const handleSelectBtn = () => setChecked(!checked);
  return (
    <div className="vertical-center" onClick={handleSelectBtn}>
      <div>
        <Checkbox
          checked={checked}
          size="small"
          sx={{ color: "#ef750f" }}
          className="checkBoxBtn"
        />
      </div>
      <div className={className}>{text}</div>
    </div>
  );
}

// export function DropDownRadioBtn({ className, text }) {
//   // const [nestedDropDown, setNestedDropDown] = useState(false);
//   return (
//     <div className="vertical-center">
//       <div>
//         <Radio size="small" sx={{ color: "#ef750f" }} className="checkBoxBtn" />
//         {/* <CustomDropDown
//           data={["comercial", "RESIDENTIAL"]}
//           // selectType={"enabled"}
//           styleMenu={{ width: "150px" }}
//           setIsDropDownOpen={() => setNestedDropDown(!nestedDropDown)}
//           text={"Select TYPE"}
//         /> */}
//       </div>
//       <div className={className}>{text}</div>
//     </div>
//   );
// }

export function SearchSuggestionBar() {
  const url = "https://bold-approval-c005df0fb8.strapiapp.com/api/projects?";

  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleInput = (event) => setValue(event.target.value);
  const handleOpenSearchSuggestion = () => setIsSuggestionOpen(true);
  const handleCloseSearchSuggestion = () =>
    setTimeout(() => setIsSuggestionOpen(false), 300);

  const [searchSuggestions, isLoading, error] = useApiFetcher(url);
  if (error) return <div>{error.message}</div>;
  if (isLoading || !searchSuggestions) return null;

  const data = searchSuggestions?.map((item) => {
    const { Project_Name, Project_Configuration, Address } = item?.attributes;
    return { Project_Name, Project_Configuration, Address };
  });
  // console.log(data);
  const handleSelectValue = (value) => setValue(value.Project_Name);
  return (
    <div className="input-width d-flex">
      <div className=" searchBarLogo fw-bold">
        <IoSearchOutline />
      </div>
      <input
        value={value}
        placeholder="Search for locality, Property or Project"
        onChange={handleInput}
        onClick={handleOpenSearchSuggestion}
      />
      {isSuggestionOpen ? (
        <div
          className="inputSuggestions"
          onMouseLeave={handleCloseSearchSuggestion}
        >
          {data?.map((item, idx) => (
            <li key={idx} onClick={() => handleSelectValue(item)}>
              {item?.Project_Name}
            </li>
          ))}
        </div>
      ) : null}
    </div>
  );
}
