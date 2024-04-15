import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { ManagmentData } from "./ManagmentData";
import ManagmentList from "./ManagmentList";


export default function Managment () {
    
const text = "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"

    return (
        <Section>
            <SectionHeader title="Effortless Property Management" text={text}/>
            <ManagmentList data={ManagmentData}/>
        </Section>
    )
}