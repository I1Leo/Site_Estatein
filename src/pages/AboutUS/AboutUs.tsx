import Achievements from "../../components/Achievements/Achievements";
import { AchievementsData } from "../../components/Achievements/AchievementsData";
import Clients from "../../components/Clients/Clients";
import Experience from "../../components/Experience/Experience";
import { ExperienceData } from "../../data/ExperienceData";
import Promo from "../../components/about-us-hero/Promo";
import Team from "../../components/Team/Team";
import { TeamData } from "../../data/TeamData";
import Values from "../../components/Values/Values";
import { ValuesData } from "../../data/ValuesData";

export default function AboutUs() {
   return (
      <main>
         <Promo />
         <Values data={ValuesData} />
         <Achievements data={AchievementsData} />
         <Experience data={ExperienceData} />
         <Team data={TeamData} />
         <Clients />
      </main>
   )
}