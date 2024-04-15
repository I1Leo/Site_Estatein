import Section from "../../../generic/Section";
import SectionHeader from "../../../generic/SectionHeader";
import ConnectForm from "./ConnectForm";
import { ConnectFormData } from "./ConnectFormData";

export default function FormSection () {
    
    const text = "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."

    return (
        <Section>
            <SectionHeader title="Let's Make it Happen" text={text}/>
            <ConnectForm data={ConnectFormData}/>
        </Section>
    )
}