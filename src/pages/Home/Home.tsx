import FAQ from "../../components/faq/faq";
import HomeFeatures from "../../components/home-features/home-features";
import HomeHero from "../../components/home-hero/home-hero";
import Properties from "../../components/properties/properties";
import Reviews from "../../components/reviews/reviews";

export default function Home() {
   return (
      <main>
         <HomeHero />
         <HomeFeatures />
         <Properties />
         <Reviews />
         <FAQ />
      </main>
   )
}