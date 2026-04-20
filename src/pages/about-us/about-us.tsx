import Achievements from "../../components/achievements/achievements";
import { AchievementsData } from "../../data/AchievementsData";
import Clients from "../../components/clients/Clients";
import Experience from "../../components/experience/experience";
import { ExperienceData } from "../../data/ExperienceData";
import Team from "../../components/team/team";
import { TeamData } from "../../data/TeamData";
import Values from "../../components/values/values";
import { ValuesData } from "../../data/ValuesData";
import AboutUsPromo from "../../components/about-us-hero/about-us";

export default function AboutUs() {
   return (
      <main>
         <AboutUsPromo />
         <Values data={ValuesData} />
         <Achievements data={AchievementsData} />
         <Experience data={ExperienceData} />
         <Team data={TeamData} />
         <Clients />
      </main>
   )
}