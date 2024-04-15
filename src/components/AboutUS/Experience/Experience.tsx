import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { ExperienceDataType } from "./ExperienceData";
import ExperienceItem from "./ExperienceItem";
import s from "./Experience.module.scss"

type ExperienceType = {
    data: ExperienceDataType[]
}

export default function Experience({data} : ExperienceType) {
    
    const text = "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."

    return (
        <Section>
            <SectionHeader title="Navigating the Estatein Experience" text={text}/>
            <ul className={s.container}>
                {
                    data.map((item, index) => (
                        <ExperienceItem key={item.title} step={index} title={item.title} text={item.text}/>
                    ))
                }
            </ul>
        </Section>
    )
}