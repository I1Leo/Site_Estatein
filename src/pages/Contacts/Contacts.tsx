import Connect from "../../components/Connect/Connect";
import Explore from "../../components/Explore/Explore";
import Features from "../../components/contacts-features/Features";
import Offices from "../../components/Offices/Offices";

import Promo from "../../components/contacts-hero/Promo";


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