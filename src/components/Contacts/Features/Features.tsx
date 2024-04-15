import FeaturesItem from "./FeaturesItem";
import s from "./Features.module.scss"
import FeaturesSocialsItem from "./FeaturesSocialsItem";
import { FeaturesSocialsData } from "./FeaturesSocialsData";

export default function Features() {
   return (
      <section className={s.section}>
         <div className={s.wrapper}>
            <ul className={s.list}>
               <FeaturesItem src="./img/Contacts/Features/Icon1.svg" text="info@estatein.com" />
               <FeaturesItem src="./img/Contacts/Features/Icon2.svg" text="+1 (123) 456-7890" />
               <FeaturesItem src="./img/Contacts/Features/Icon3.svg" text="Main Headquarters" />
               <FeaturesSocialsItem src="./img/Contacts/Features/Icon4.svg" data={FeaturesSocialsData}/>
            </ul>
         </div>

      </section>
   )
}