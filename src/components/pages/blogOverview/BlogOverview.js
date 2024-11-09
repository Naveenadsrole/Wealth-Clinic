// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";

import CommentBtn, { LikeBtn, ShareBtn } from "./CommentsBtn";
import CkEditorContentDisplay from "../../globalComponents/CkEditorContentDisplay/CkEditorContentDisplay";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import { getMonthName, splitDate } from "../../../helpers/helper";
import "./blogOverview.css";

const url = (blogId) =>
  getFullUrl(`${API_URL.BLOG_SUMMARY_PAGE}/${blogId}${API_URL.POPULATE}`);

const BlogOverview = () => {
  const location = useLocation();
  const { blogId } = location?.state;

  const [blogDescription, error, isLoading] = useApiFetcher(url(blogId));
  //   const navigate = useNavigate();

  //   const handleBack = function () {
  //     navigate("/blogs");
  //   };
  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const { Title, Description, Image, Pubish_Date } =
    blogDescription?.attributes;
  const [year, month, date] = splitDate(Pubish_Date);

  const img = Image?.data?.attributes?.url;
  const monthName = getMonthName(month);

  return (
    <>
      {/* <div>
        <button onClick={handleBack}>Back to blogs</button>
      </div> */}
      <div className="mt-4 mb-4 BlogBgColor">
        <section>
          <div className="blogImgContainer">
            <div className="imgForBlog">
              <img className="imgBlogStyle" alt="" src={img} />
              <div className="secDate">
                <p className="dateBlog">{date}</p>
                <p className="monthBlog">
                  {monthName} {year}
                </p>
                <p className="ProfileBlog">
                  <TfiUser className="ProfileIcon" /> By Admin
                </p>
              </div>

              <div className="blog-btns-container">
                <LikeBtn />
                <ShareBtn />
                <CommentBtn />
              </div>
            </div>
          </div>

          <section className="blogPad">
            <h2>{Title}</h2>

            {Description?.map((item, idx) => (
              <CkEditorContentDisplay key={idx} content={item} />
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default BlogOverview;
