import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { ClientsData } from "./ClientsData";
import ClientsSlider from "./ClientsSlider";



export default function Clients () {
    
    const text = "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
    
    return (
        <Section>
            <SectionHeader title="Our Valued Clients" text={text}/>
            <ClientsSlider data={ClientsData}/>
        </Section>
    )
}