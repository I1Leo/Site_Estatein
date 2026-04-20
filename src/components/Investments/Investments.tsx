import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import { InvestmentsData } from "../../data/InvestmentsData";
import InvestmentsGreyItem from "./investments-grey-item/investments-grey-item";
import InvestmentsList from "./investments-list/investments-list";
import s from "./Investments.module.scss"

export default function Investments() {

    const text = "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."

    return (
        <Section>
            <div className={s.container}>
                <div className={s.body}>
                    <SectionHeader title="Smart Investments, Informed Decisions" text={text} />
                    <InvestmentsGreyItem />
                </div>
                <InvestmentsList data={InvestmentsData} />
            </div>
        </Section>
    )
}