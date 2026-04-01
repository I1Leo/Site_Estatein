import HomeFeaturesItem from "./home-features-item/home-features-item";
import s from "./home-features.module.scss"

export default function HomeFeatures() {
   return (
      <section className={s.section}>
         <div className={s.wrapper}>
            <ul className={s.list}>
               <HomeFeaturesItem src="./img/Home/Features/Icon1.svg" text="Find Your Dream Home" />
               <HomeFeaturesItem src="./img/Home/Features/Icon2.svg" text="Unlock Property Value" />
               <HomeFeaturesItem src="./img/Home/Features/Icon3.svg" text="Effortless Property Management" />
               <HomeFeaturesItem src="./img/Home/Features/Icon4.svg" text="Smart Investments, Informed Decisions" />
            </ul>
         </div>

      </section>
   )
}