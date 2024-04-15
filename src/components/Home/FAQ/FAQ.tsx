import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { FAQData } from "./FAQData";
import FAQSlider from "./FAQSlider";

export default function FAQ () {
    
    const text = "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.";
    const btnText = "View All FAQ’s";

    return (
        <Section>
            <SectionHeader title="Frequently Asked Questions" text={text} btnText={btnText}/>
            <FAQSlider btnText={btnText} data={FAQData}/>
        </Section>
    )
}