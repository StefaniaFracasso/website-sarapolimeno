import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleReview from "./SingleReview";

const ReviewsHome = () => {

  const arrowStyles = {
    color: "#008371", 
    fontSize: "40px", 
    position: "absolute", 
    top: "40%", 
    transform: "translateY(-50%)", 
    zIndex: "2", 
    cursor: "pointer", 
  };

  return (
    <>
      <div className="text-center mt-4"
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      >
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase">
          Le vostre parole
        </h5>
        <h2 className="mb-4 text-5xl font-marteni">Testimonials</h2>
      </div>    
    <div className="hidden md:block container mx-auto my-16" >
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
        <SingleReview name={"Serena"} review=" Sono contenta di essere seguita da lei durante questo delicato percorso, anche perché le sue idee di alimentazione rispettano e onorano la gioia nel nutrirsi." />
        <SingleReview name={"Natalia"} review="Mi ha rimesso in carreggiata e mi ha dato tanto conforto anche a livello umano e psicologico. Sono davvero contenta di averla conosciuta" />
        <SingleReview name={"Ludovica"} review="Ci siamo sentiti fisicamente ed emotivamente sempre meglio e realizzando il sogno utopico fa di “tornare” fisicamente quasi come pre-gravidanze… anzi anche meglio!" />
        </div>
        <div className="flex flex-col md:flex-row mb-10">
        <SingleReview name={"Sabrina"} review="Seguendo la sua dieta non prendo più le medicine per lo stomaco e sto perdendo peso e cm. Grazie mille dottoressa" />
        <SingleReview name={"Agostino"} review="Ho imparato a nutrirmi, gestire qualche sgarro, e perché no a perdere qualche kilo di troppo.Persona squisita che ama il proprio lavoro, grazie Sara" />
        <SingleReview name={"Ilaria"} review="Prima di essere una Dottoressa molto preparata, è una bravissima persona, sensibile, empatica, che sa metterti a tuo agio" />
        </div>
      </Carousel>
    </div>
    <div className=" md:hidden container my-14 mx-auto">
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
        <SingleReview name={"Serena"} review=" Sono contenta di essere seguita da lei durante questo delicato percorso, anche perché le sue idee di alimentazione rispettano e onorano la gioia nel nutrirsi." />
        <SingleReview name={"Natalia"} review="Mi ha rimesso in carreggiata e mi ha dato tanto conforto anche a livello umano e psicologico. Sono davvero contenta di averla conosciuta" />
        <SingleReview name={"Ludovica"} review="Ci siamo sentiti fisicamente ed emotivamente sempre meglio e realizzando il sogno utopico fa di “tornare” fisicamente quasi come pre-gravidanze… anzi anche meglio!" />
        <SingleReview name={"Sabrina"} review="Seguendo la sua dieta non prendo più le medicine per lo stomaco e sto perdendo peso e cm. Grazie mille dottoressa" />
        <SingleReview name={"Agostino"} review="Ho imparato a nutrirmi, gestire qualche sgarro, e perché no a perdere qualche kilo di troppo.Persona squisita che ama il proprio lavoro, grazie Sara" />
        <SingleReview name={"Ilaria"} review="Prima di essere una Dottoressa molto preparata, è una bravissima persona, sensibile, empatica, che sa metterti a tuo agio" />
      </Carousel>
    </div>
    </>
  );
};

export default ReviewsHome;


