import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import { ClientsData } from "../../data/clients-data";
import ClientsSlider from "./clients-slider/clients-slider";

export default function Clients() {
    const text =
        "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving";

    return (
        <Section>
            <SectionHeader title="Our Valued Clients" text={text} />
            <ClientsSlider data={ClientsData} />
        </Section>
    );
}
