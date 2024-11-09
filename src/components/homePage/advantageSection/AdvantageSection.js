import Heading from "../../globalComponents/molecules/Heading";

import searchBuilding from "../../../assets/searchBuilding.png";
import buildingRent from "../../../assets/buildingRent.png";
import "./advantageSection.css";

const AdvantageSection = () => {
  return (
    <section id="About" className="companyWork my-5">
      <div className="text-content">
        <div>
          {/* <h1>
            Stay updated with the
            <span className="text-danger"> Real estate industry</span>
          </h1> */}
          <Heading
            text={"Blogs"}
            fontWeight={700}
            color={"var(--global-heading-color)"}
          />
          <h4 className="text-lg-center">
            Stay updated with the Real estate industry
          </h4>
        </div>
        <button className=" projectBtn btn my-3  border rounded-4 text-white">
          Blogs <i className="bi bi-arrow-right-short "></i>
        </button>
      </div>

      <div className="project-Card-container">
        <div>
          <img alt="" src={require("../../../assets/realState.png")} />
          <h5 className="mt-1 fw-light">JAN 31, 2024 | DELHI NCR</h5>
          <p>
            From Connectivity to Prosperity: Unveiling Noida's Infrastructure
            Marvel From Connectivity to Prosperity: Unveiling Noida's
            Infrastructure Marvel
          </p>
          <button className="btn btn-outline-dark  border rounded-4 w-75 mx-auto mb-3 ">
            Explore
          </button>
        </div>

        <div>
          <img src={searchBuilding} alt="" />
          <h5 className="mt-1 fw-bold">FEB 2, 2024 | INVESTMENT </h5>
          <p>
            Smart Investments: Why Properties in M3M The Line In Noida is the
            Commercial Hub Smart Investments: Why Properties in M3M The Line In
            Noida is the Commercial Hub
          </p>

          <button className="btn btn-outline-dark  border rounded-4 w-75 mx-auto mb-3 ">
            Explore
          </button>
        </div>
        <div>
          <img src={buildingRent} alt="" />
          <h5 className="mt-1 fw-bold">FEB 6, 2024 | REAL STATE NEWS</h5>
          <p>
            Investing in Tomorrow: Commercial Real Estate Trends in Noida's
            Orion 132Investing in Tomorrow: Commercial Real Estate Trends in
            Noida's Orion 132
          </p>
          <button className="btn btn-outline-dark  border rounded-4 w-75 mx-auto mb-3 ">
            Explore
          </button>
        </div>
        <div>
          <img src={require("../../../assets/building.png")} alt="" />
          <h5 className="mt-1 fw-bold">FEB 6, 2024 | REAL STATE NEWS</h5>
          <p>
            From Connectivity to Prosperity: Unveiling Noida's Infrastructure
            Marvel From Connectivity to Prosperity: Unveiling Noida's
            Infrastructure Marvel
          </p>
          <button className="btn btn-outline-dark  border rounded-4 w-75 mx-auto mb-3 ">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
