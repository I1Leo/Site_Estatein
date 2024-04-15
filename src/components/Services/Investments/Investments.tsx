import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { InvestmentsData } from "./InvestmentsData";
import InvestmentsGreyItem from "./InvestmentsGreyItem";
import InvestmentsList from "./InvestmentsList";
import s from "./Investments.module.scss"

export default function Investments () {
    
const text = "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."

    return (
        <Section>
            <div className={s.container}>
                <div className={s.body}>
                    <SectionHeader title="Smart Investments, Informed Decisions" text={text}/>
                    <InvestmentsGreyItem />
                </div>
                <InvestmentsList data={InvestmentsData}/>
            </div>
        </Section>
    )
}