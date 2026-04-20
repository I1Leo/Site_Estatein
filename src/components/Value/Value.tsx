import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import { ValueData } from "../../data/ValueData";
import ValueList from "./value-list/value-list";


export default function Value() {

    const text = "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"

    return (
        <Section>
            <SectionHeader title="Unlock Property Value" text={text} />
            <ValueList data={ValueData} />
        </Section>
    )
}