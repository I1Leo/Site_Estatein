import { PropertiesData } from "../../data/propertires-data";
import SectionHeader from "../generic/section-header/section-header";
import PropertiesSlider from "./properties-slider/properties-slider";
import Section from "../generic/section/section";

export default function Properties() {
    const sectionHeaderTitle = "Featured Properties";
    const sectionHeaderText =
        'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.';
    const btnText = "View All Properties";

    return (
        <Section>
            <SectionHeader title={sectionHeaderTitle} text={sectionHeaderText} btnText={btnText} />
            <PropertiesSlider btnText={btnText} data={PropertiesData} />
        </Section>
    );
}
