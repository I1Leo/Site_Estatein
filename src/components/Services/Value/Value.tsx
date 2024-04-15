import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { ValueData } from "./ValueData";
import ValueList from "./ValueList";


export default function Value () {
    
const text = "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"

    return (
        <Section>
            <SectionHeader title="Unlock Property Value" text={text}/>
            <ValueList data={ValueData}/>
        </Section>
    )
}