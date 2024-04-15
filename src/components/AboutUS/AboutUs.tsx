import Achievements from "./Achievements/Achievements";
import { AchievementsData } from "./Achievements/AchievementsData";
import Clients from "./Clients/Clients";
import Experience from "./Experience/Experience";
import { ExperienceData } from "./Experience/ExperienceData";
import Promo from "./Promo/Promo";
import Team from "./Team/Team";
import { TeamData } from "./Team/TeamData";
import Values from "./Values/Values";
import { ValuesData } from "./Values/ValuesData";

export default function AboutUs () {
   return (
      <main>
         <Promo />
         <Values data={ValuesData}/>
         <Achievements data={AchievementsData}/>
         <Experience data={ExperienceData}/>
         <Team data={TeamData}/>
         <Clients />
      </main>
   )
}