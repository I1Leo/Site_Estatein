import DarkBtn from "../../generic/DarkBtn";
import PurpleBtn from "../../generic/PurpleBtn";
import s from "./Promo.module.scss"
import PromoBtn from "./PromoBtn";
import PromoItem from "./PromoItem";

export default function Promo() {
   return (
      <section className={s.section}>
         <div className={s.container}>
            <div className={s.wrapper}>
               <div className={s.body}>
                  <h1 className={s.title}>Discover Your Dream Property with Estatein</h1>
                  <p className={s.text}>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                  <div className={s.btns}>
                     <DarkBtn text="Learn More" />
                     <PurpleBtn text="Browse Properties" />
                  </div>
                  <ul className={s.list}>
                     <PromoItem title="200+" text="Happy Customers" />
                     <PromoItem title="10k+" text="Properties For Clients" />
                     <PromoItem title="16+" text="Years of Experience" big/>
                  </ul>
               </div>
               <div className={s.img_container}>
                  <PromoBtn />
               </div>
            </div>
         </div>



      </section>
   )
}