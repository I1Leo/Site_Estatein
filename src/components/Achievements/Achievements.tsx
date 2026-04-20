import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import type { AchievementsDataType } from "../../data/AchievementsData";
import AchievementsItem from "./achievements-item/achievements-item";
import s from "./achievements.module.scss";

type AchievementsType = {
    data: AchievementsDataType[]
}

export default function Achievements({ data }: AchievementsType) {

    const text = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."

    return (
        <Section>
            <SectionHeader title="Our Achievements" text={text} />
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