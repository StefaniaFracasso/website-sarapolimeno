import HeroSection from "./HeroSection"
import PresentationHome from "./PresentationHome"
import ReviewsHome from "./ReviewsHome"
import ServicesHome from "./ServicesHome"
import StudioPositions from "./StudioPositions"

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