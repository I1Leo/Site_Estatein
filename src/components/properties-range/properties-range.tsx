import { PropertiesRangeData } from "../../data/properties-range-data";
import SectionHeader from "../generic/section-header/section-header";
import s from "./properties-range.module.scss";
import PropertiesSlider from "./properties-range-slider/properties-range-slider";
import Section from "../generic/section/section";

export default function PropertiesRange() {
    const sectionHeaderTitle = "Featured Properties";
    const sectionHeaderText =
        'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.';
    const btnText = "View All Properties";

    return (
        <Section>
            <div className={s.wrapper}>
                <SectionHeader
                    title={sectionHeaderTitle}
                    text={sectionHeaderText}
                    btnText={btnText}
                />
                <PropertiesSlider data={PropertiesRangeData} />
            </div>
        </Section>
    );
}
