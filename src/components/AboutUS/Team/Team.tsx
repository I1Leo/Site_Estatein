import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { TeamDataType } from "./TeamData";
import TeamItem from "./TeamItem";
import s from "./Team.module.scss"

type TeamType = {
    data: TeamDataType[]
}

export default function Team  ({data} : TeamType) {
    
    const text = "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."

    return (
        <Section>
            <SectionHeader title="Meet the Estatein Team" text={text}/>
            <ul className={s.container}>
                {
                    data.map((item) => (
                        <TeamItem key={item.name} name={item.name} position={item.position} img={item.img}/>    
                    ))
                }
            </ul>
        </Section>
    )
}