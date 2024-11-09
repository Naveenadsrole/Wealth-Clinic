import ButtonDarkBlue from "../../../globalComponents/molecules/ButtonDarkBlue";
import Heading from "../../../globalComponents/molecules/Heading";
import InputCustom from "../../../globalComponents/molecules/InputCustom";

const Brochure = ({ className }) => {
  return (
    <div className={` col-md-12  col-sm-12 col-xs-12 px-5`}>
      <div className="d-flex my-2 ">
        <Heading
          text={"Please Enter Your Details"}
          fontSize={"1.rem"}
          color="111"
          fontWeight="600"
          style={{ lineHeight: "1.5rem" }}
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className={`${className}  col-md-5 border rounded-3 p-3`}
      >
        <InputCustom placeholder="Enter Name" className="px-3 rounded-2" />
        <InputCustom placeholder="Enter Email" className="px-3 rounded-2" />

        <ButtonDarkBlue name="Download Brochure" className={"px-3 rounded-2"} />
      </form>
    </div>
  );
};

export default Brochure;
