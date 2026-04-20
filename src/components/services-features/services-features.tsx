import ServicesFeaturesItem from "./services-features-item/services-features-item";
import s from "./services-features.module.scss";
import icon1 from "../../img/Services/Features/Icon1.svg";
import icon2 from "../../img/Services/Features/Icon2.svg";
import icon3 from "../../img/Services/Features/Icon3.svg";
import icon4 from "../../img/Services/Features/Icon4.svg";

export default function ServicesFeatures() {
   return (
      <section className={s.section}>
         <div className={s.wrapper}>
            <ul className={s.list}>
               <ServicesFeaturesItem src={icon1} text="Find Your Dream Home" />
               <ServicesFeaturesItem src={icon2} text="Unlock Property Value" />
               <ServicesFeaturesItem src={icon3} text="Effortless Property Management" />
               <ServicesFeaturesItem src={icon4} text="Smart Investments, Informed Decisions" />
            </ul>
         </div>

      </section>
   )
}