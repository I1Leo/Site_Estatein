import DarkBtn from "../generic/dark-btn/dark-btn";
import PurpleBtn from "../generic/purple-btn/purple-btn";
import HomeHeroBtn from "./home-hero-btn/home-hero-btn";
import HomeHeroItem from "./home-hero-item/home-hero-item";
import s from "./home-hero.module.scss"


export default function HomeHero() {
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
                     <HomeHeroItem title="200+" text="Happy Customers" />
                     <HomeHeroItem title="10k+" text="Properties For Clients" />
                     <HomeHeroItem title="16+" text="Years of Experience" big/>
                  </ul>
               </div>
               <div className={s.img_container}>
                  <HomeHeroBtn />
               </div>
            </div>
         </div>



      </section>
   )
}