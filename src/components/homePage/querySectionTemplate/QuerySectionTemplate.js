import Heading from "../../globalComponents/molecules/Heading";
import QueryForm2 from "../../globalComponents/queryForm2/QueryForm2";

import "./QuerySectionTemplate.css";

const QuerySectionTemplate = () => {
  return (
    <section className="m-0 my-5 d-flex flex-raw QuerySectionTemplate">
      <div className="container">
        <div className="enquiryFormTitle">
          <Heading
            text={"ANY ENQUIRIES"}
            fontWeight={"700"}
            fontSize={"2.4rem"}
            color={"var(--global-heading-color)"}
          />
          <h4 className="text-white">Fill This Query Form</h4>
        </div>
        <div className="row">
          <div className="col-md-5">
            <QueryForm2 />
          </div>
          <div className="col-md-7  vertical-center center-item">
            <div className="fixedHeight">
              <div
                className="elfsight-app-300e4408-9ca3-4e2b-83e3-3cf4b6131b88 marginTopGR reviewPosition"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* <EarthSection /> */}
      {/* <EarthWithStar /> */}
    </section>
  );
};

export default QuerySectionTemplate;
