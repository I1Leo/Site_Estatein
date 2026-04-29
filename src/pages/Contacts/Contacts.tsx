import Connect from "../../components/connect/connect";
import Explore from "../../components/explore/explore";
import Offices from "../../components/offices/offices";
import ContactsHero from "../../components/contacts-hero/contacts-hero";
import ContactsFeatures from "../../components/contacts-features/contacts-features";


export default function Contacts () {
   return (
      <main>
         <ContactsHero />
         <ContactsFeatures />
         <Connect />
         <Offices />
         <Explore />
      </main>
   )
}