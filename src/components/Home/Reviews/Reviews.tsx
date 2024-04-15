import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { ReviewsData } from "./ReviewsData";
import ReviewsSlider from "./ReviewsSlider";



export default function Reviews () {
    
    const text = "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.";
    const btnText = "View All Testimonials"
    
    return (
        <Section>
            <SectionHeader title="What Our Clients Say" text={text} btnText={btnText} />
            <ReviewsSlider btnText={btnText} data={ReviewsData}/>
        </Section>
    )
}