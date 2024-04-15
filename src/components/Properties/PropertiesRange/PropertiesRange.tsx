
import { PropertiesRangeData } from "./PropertiesRangeData";
import SectionHeader from "../../generic/SectionHeader";
import s from "./PropertiesRange.module.scss"
import PropertiesSlider from "./PropertiesRangeSlider";
import Section from "../../generic/Section";

export default function PropertiesRange() {

   const sectionHeaderTitle = "Featured Properties";
   const sectionHeaderText = 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
   const btnText = "View All Properties"



   return (
      <Section>
         <div className={s.wrapper}>
            <SectionHeader title={sectionHeaderTitle} text={sectionHeaderText} btnText={btnText} />
            <PropertiesSlider data={PropertiesRangeData} />
         </div>
      </Section>
   )
}