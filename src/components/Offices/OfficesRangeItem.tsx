import PurpleBtn from "../../generic/PurpleBtn"
import s from "./OfficesRangeItem.module.scss"


type OfficesRangeItemType = {
   type: string
   location: string
   description: string
   mail: string
   tel: string
   city: string
}

export default function OfficesRangeItem({ type, location, description, mail, tel, city }: OfficesRangeItemType) {
   return (
      <li  className={s.item}>
         <p className={s.type}>{type}</p>
         <h3 className={s.location}>{location}</h3>
         <p className={s.description}>{description}</p>
         <ul className={s.info}>
            <li className={s.info_item}>
               <div>
                  <img src="./img/Contacts/Offices/mail-icon.svg" alt="" />
               </div>
               <p>
                  {mail}
               </p>
            </li>
            <li className={s.info_item}>
               <div>
                  <img src="./img/Contacts/Offices/tel-icon.svg" alt="" />
               </div>
               <p>
                  {tel}
               </p>
            </li>
            <li className={s.info_item}>
               <div>
                  <img src="./img/Contacts/Offices/loc-icon.svg" alt="" />
               </div>
               <p>
                  {city}
               </p>
            </li>
         </ul>
         <PurpleBtn text="Get Direction"/>
      </li>
   )
}