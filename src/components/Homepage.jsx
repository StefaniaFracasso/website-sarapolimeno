import HeroSection from "./homepage/HeroSection"
import PresentationHome from "./homepage/PresentationHome"
import ReviewsHome from "./homepage/ReviewsHome"
import ServicesHome from "./homepage/ServicesHome"
import StudioPositions from "./homepage/StudioPositions"

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            <PresentationHome />
            <ServicesHome/>
            <ReviewsHome/>
            <StudioPositions/>
        </div>
    )
}

export default Homepage