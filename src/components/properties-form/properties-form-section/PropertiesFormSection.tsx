import Section from "../../generic/section/section";
import SectionHeader from "../../generic/section-header/section-header";
import PropertiesForm from "../properties-form";
import { PropertiesFormData } from "../../../data/PropertiesFormData";

export default function PropertiesFormSection() {

    const text = "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."

    return (
        <Section>
            <SectionHeader title="Let's Make it Happen" text={text} />
            <PropertiesForm data={PropertiesFormData} />
        </Section>
    )
}