import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleReview from "./SingleReview";

const ReviewsHome = () => {
  const arrowStyles = {
    color: "#008371", 
    fontSize: "40px", 
    position: "absolute", 
    top: "50%", 
    transform: "translateY(-50%)", 
    zIndex: "2", 
    cursor: "pointer", 
  };

  return (
    <>
      <div className="text-center mt-4">
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase">
          Le vostre parole
        </h5>
        <h2 className="mb-4 text-5xl font-marteni">Testimonials</h2>
      </div>    
    <div className="container my-24 mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: "10px" }} 
              className="carousel-arrow-prev"
            >
              &lt; 
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: "10px" }}
              className="carousel-arrow-next"
            >
              &gt; 
            </button>
          )
        }
      >
        <div className="flex flex-col md:flex-row">
        <SingleReview name={"Tizia"} review="Lorem ipsum dolor sit amet bla bla bla bla bla bla bla" />
        <SingleReview name={"Caia"} review="Lorem ipsum dolor sit amet..." />
        <SingleReview name={"Sempronia"} review="Lorem ipsum dolor sit amet..." />
        </div>
        <div className="flex flex-col md:flex-row">
        <SingleReview name={"Tizia"} review="Lorem ipsum dolor sit amet..." />
        <SingleReview name={"Caia"} review="Lorem ipsum dolor sit amet..." />
        <SingleReview name={"Sempronia"} review="Lorem ipsum dolor sit amet..." />
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default ReviewsHome;


