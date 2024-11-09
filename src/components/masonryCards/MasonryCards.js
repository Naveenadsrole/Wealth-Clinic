import Masonry from "@mui/lab/Masonry";
import MasonryCard from "./MasonryCard";
const size = [
  "450",
  "490",
  "400",
  "420",
  "450",
  "450",
  "350",
  "400",
  "600",
  "450",
  "500",
  "550",
  "450",
  "550",
  "550",
  "600",
  "550",
];

const MasonryCards = ({ data, imgType }) => {
  //imgType if if have option of properties field like 'img1' field 'img2' field
  return (
    <div style={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={4} spacing={2} sequential>
        {data?.map((item, idx) => {
          return (
            <MasonryCard
              key={idx}
              item={{ item, size: size[idx % data.length] }}
              imgType={imgType}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default MasonryCards;
