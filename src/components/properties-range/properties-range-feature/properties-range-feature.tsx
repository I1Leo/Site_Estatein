import s from "./properties-range-feature.module.scss";
import icon1 from "../../../img/Properties/PropertiesRange/icon1.svg";
import icon2 from "../../../img/Properties/PropertiesRange/icon2.svg";
import icon3 from "../../../img/Properties/PropertiesRange/icon3.svg";

type PropertiesRangeFeaturesProps = {
   type: number,
   text: string
}

export default function PropertiesRangeFeature ({type, text} : PropertiesRangeFeaturesProps) {
   
   const icon = type === 0 ? icon1 : type === 1 ? icon2 : icon3

   return (
      <li className={s.container}>
         <div className={s.img_container}>
            <img src={icon} alt="" />
         </div>
         <p className={s.text}>{text}</p>
      </li>
   )
}