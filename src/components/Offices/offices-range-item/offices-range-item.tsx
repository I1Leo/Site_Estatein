import PurpleBtn from "../../generic/purple-btn/purple-btn";
import s from "./offices-range-item.module.scss";
import mailIcon from "../../../img/Contacts/Offices/mail-icon.svg";
import telIcon from "../../../img/Contacts/Offices/tel-icon.svg";
import locIcon from "../../../img/Contacts/Offices/loc-icon.svg";


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
                  <img src={mailIcon} alt="" />
               </div>
               <p>
                  {mail}
               </p>
            </li>
            <li className={s.info_item}>
               <div>
                  <img src={telIcon} alt="" />
               </div>
               <p>
                  {tel}
               </p>
            </li>
            <li className={s.info_item}>
               <div>
                  <img src={locIcon} alt="" />
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