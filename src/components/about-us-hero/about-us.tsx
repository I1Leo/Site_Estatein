import SectionHeader from "../generic/section-header/section-header";
import s from "./about-us.module.scss"
import AboutUsHeroItem from "./abouts-us-hero-item/about-us-hero-item";
import image from "../../img/AboutUs/Promo/promo-img.png"

export default function AboutUsPromo() {

   const text = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."

   return (
      <section className={s.section}>
         <div className={s.container}>
            <div className={s.wrapper}>
               <div className={s.body}>
                  <SectionHeader title="Our Jorney" text={text} />
                  <ul className={s.list}>
                     <AboutUsHeroItem title="200+" text="Happy Customers" />
                     <AboutUsHeroItem title="10k+" text="Properties For Clients" />
                     <AboutUsHeroItem title="16+" text="Years of Experience" big />
                  </ul>
               </div>
               <div className={s.img_container}>
                  <img src={image} alt="" />
               </div>
            </div>
         </div>



      </section>
   )
}