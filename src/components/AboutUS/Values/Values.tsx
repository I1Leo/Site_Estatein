import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import { ValuesDataType } from "./ValuesData";
import ValuesItem from "./ValuesItem";
import s from "./Values.module.scss"

type ValuesProps = {
   data: ValuesDataType[]
}

export default function Values({data} : ValuesProps) {

   const text = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."

   return (
      <Section>
         <div className={s.wrapper}>
            <SectionHeader title="Our Values" text={text} />
            <ul className={s.list}>
               {
                  data.map((item) =>(
                     <ValuesItem key={item.title} title={item.title} text={item.text} icon={item.icon}/>
                  ))
               }
            </ul>
         </div>
         
      </Section>
   )
}