import { useEffect } from "react";
import HeroSection from "./homepage/HeroSection";
import PresentationHome from "./homepage/PresentationHome";
import ReviewsHome from "./homepage/ReviewsHome";
import ServicesHome from "./homepage/ServicesHome";
import StudioPositions from "./homepage/StudioPositions";
import { Helmet } from "react-helmet";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Helmet>
        <title>Dr.ssa Sara Anna Polimeno | Nutrizionista a Milano</title>
        <meta
          name="description"
          content="Piani alimentari personalizzati e supporto esperto per un corpo sano e una vita equilibrata. Scopri di più ora."
        />
      </Helmet>
      <HeroSection />
      <PresentationHome />
      <ServicesHome />
      <ReviewsHome />
      <StudioPositions />
    </div>
  );
};

export default Homepage;
