import Heading from "../molecules/Heading";
import "./cardOpener.css";

const CardOpener = ({ data }) => {
  const { Name, Designation, Profile_Image } = data?.attributes;
  const img = Profile_Image?.data?.attributes?.url;
  const name = Name;
  const jobTitle = Designation;

  // const { img, name, jobTitle } = data;
  return (
    <div className="col-md-3">
      <div className="main-sec">
        <div className="profile-card">
          <div className="img">
            <img alt="" src={img} />
          </div>
          <div className="caption">
            <Heading text={name} color="#fff" fontSize="1.25rem" />
            <p>{jobTitle}</p>
            {/* <TeamMembersSocialIcons /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOpener;

export function TeamMembersSocialIcons() {
  return (
    <div className="social-links">
      <a href="/">
        <i className="social-sec-12 fab fa-facebook"></i>
      </a>
      <a href="/twitter">
        <i className="social-sec-12 fab fa-twitter"></i>
      </a>
      <a href="/instagram.com">
        <i className="social-sec-12 fab fa-instagram"></i>
      </a>
    </div>
  );
}
