import type { TTeam } from "../../types/about-us/team";
import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import TeamItem from "./team-item/team-item";
import s from "./team.module.scss";

export default function Team({ data }: TTeam) {
    const text =
        "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.";

    return (
        <Section>
            <SectionHeader title="Meet the Estatein Team" text={text} />
            <ul className={s.container}>
                {data.map((item) => (
                    <TeamItem
                        key={item.name}
                        name={item.name}
                        position={item.position}
                        img={item.img}
                    />
                ))}
            </ul>
        </Section>
    );
}
