
import { useState } from "react"
import GreyBtn from "../../generic/grey-btn/grey-btn";
import s from "./offices-range.module.scss"
import type { OfficesRangeDataType } from "../../../data/OfficesRangeData";
import OfficesRangeItem from "../offices-range-item/offices-range-item";
import DarkBtn from "../../generic/dark-btn/dark-btn";

type OfficesRangeType = {
   data: OfficesRangeDataType[]
}

export default function OfficesRange({ data }: OfficesRangeType) {

   const [type, setType] = useState("All");

   let list = data

   if (type !== "All") {
      list = data.filter(item => item.type === type)
   }

   return (
      <div>
         <nav className={s.navigation}>
            <ul className={s.navigation_list}>
               <li className={s.item}>
                  {type === "All" ? <DarkBtn text="All" /> : <GreyBtn text="All" onChange={(type) => setType(type)} />}
               </li>
               <li className={s.item}>
                  {type === "Regional" ? <DarkBtn text="Regional" /> : <GreyBtn text="Regional" onChange={(type) => setType(type)} />}
               </li>
               <li className={s.item}>
                  {type === "International" ? <DarkBtn text="International" /> : <GreyBtn text="International" onChange={(type) => setType(type)} />}
               </li>
            </ul>
         </nav>
         <ul className={s.list}>
            {
               list.map((item, index) => (
                  <OfficesRangeItem key={index} type={item.type} location={item.location} description={item.description} mail={item.mail} tel={item.tel} city={item.city} />
               ))
            }
         </ul>
      </div>
   )
}