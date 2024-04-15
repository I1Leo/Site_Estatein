import FeaturesItem from "./FeaturesItem";
import s from "./Features.module.scss"

export default function Features() {
   return (
      <section className={s.section}>
         <div className={s.wrapper}>
            <ul className={s.list}>
               <FeaturesItem src="./img/Home/Features/Icon1.svg" text="Find Your Dream Home" />
               <FeaturesItem src="./img/Home/Features/Icon2.svg" text="Unlock Property Value" />
               <FeaturesItem src="./img/Home/Features/Icon3.svg" text="Effortless Property Management" />
               <FeaturesItem src="./img/Home/Features/Icon4.svg" text="Smart Investments, Informed Decisions" />
            </ul>
         </div>

      </section>
   )
}