import AddressCardNew from "./AddressCardNew";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import { getFullUrl, API_URL } from "../../../../assets/constants/apiUrls";
// import { ADDRESSES } from "../../../../assets/constant/contactUs";

const url = getFullUrl(`${API_URL.CONTACT_US}?populate=*`);

const AddressSection = () => {
  const [contactUs, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const ADDRESSES = contactUs?.attributes?.Branches;
  return (
    <div className="my-5 p-5">
      <div className="row center-item">
        {ADDRESSES?.map((cardData, idx) => (
          <AddressCardNew data={cardData} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default AddressSection;
