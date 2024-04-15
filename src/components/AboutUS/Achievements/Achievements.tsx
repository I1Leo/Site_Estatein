import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { AchievementsDataType } from "./AchievementsData";
import AchievementsItem from "./AchievementsItem";
import s from "./Achievements.module.scss";

type AchievementsType = {
    data: AchievementsDataType[]
}

export default function Achievements({data} : AchievementsType) {
    
    const text = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."

    return (
        <Section>
            <SectionHeader title="Our Achievements" text={text}/>
            <ul className={s.container}>
                {
                    data.map((item) => (
                        <AchievementsItem key={item.title} title={item.title} text={item.text} />
                    ))
                }
            </ul>
        </Section>
    )
}