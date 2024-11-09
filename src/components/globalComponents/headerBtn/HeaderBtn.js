import { Link } from "react-router-dom";
const HeaderBtn = (props) => {
  const { className, text } = props;
  return (
    <div style={{ width: "100px !important" }}>
      <Link to={`/${text}`} className={className}>
        {text}
      </Link>
    </div>
  );
};

export default HeaderBtn;
