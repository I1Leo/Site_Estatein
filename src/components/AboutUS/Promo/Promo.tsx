import SectionHeader from "../../generic/SectionHeader";
import s from "./Promo.module.scss"
import PromoItem from "./PromoItem";

export default function Promo() {

   const text = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."

   return (
      <section className={s.section}>
         <div className={s.container}>
            <div className={s.wrapper}>
               <div className={s.body}>
                  <SectionHeader title="Our Jorney" text={text}/>
                  <ul className={s.list}>
                     <PromoItem title="200+" text="Happy Customers" />
                     <PromoItem title="10k+" text="Properties For Clients" />
                     <PromoItem title="16+" text="Years of Experience" big/>
                  </ul>
               </div>
               <div className={s.img_container}>
                  <img src="./img/AboutUs/Promo/promo-img.png" alt="" />
               </div>
            </div>
         </div>



      </section>
   )
}