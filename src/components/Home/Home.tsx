import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import Promo from "./Promo/Promo";
import Properties from "./Properties/Properties";
import Reviews from "./Reviews/Reviews";

export default function Home() {
   return (
      <main>
         <Promo />
         <Features />
         <Properties />
         <Reviews />
         <FAQ />
      </main>
   )
}