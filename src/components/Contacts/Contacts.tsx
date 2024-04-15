import Connect from "./Connect/Connect";
import Explore from "./Explore/Explore";
import Features from "./Features/Features";
import Offices from "./Offices/Offices";

import Promo from "./Promo/Promo";


export default function Contacts () {
   return (
      <main>
         <Promo />
         <Features />
         <Connect />
         <Offices />
         <Explore />
      </main>
   )
}