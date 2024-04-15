import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import OfficesRange from "./OfficesRange";
import { OfficesRangeData } from "./OfficesRangeData";


export default function Offices () {
   
   const text = "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"

   return (
      <Section>
         <SectionHeader title="Discover Our Office Locations" text={text}/>
         <OfficesRange data={OfficesRangeData}/>
      </Section>
   )
}