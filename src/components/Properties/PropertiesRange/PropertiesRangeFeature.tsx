import s from "./PropertiesRangeFeature.module.scss"

type PropertiesRangeFeaturesProps = {
   type: number,
   text: string
}

export default function PropertiesRangeFeature ({type, text} : PropertiesRangeFeaturesProps) {
   
   const icon = type === 0 ? "./img/Properties/PropertiesRange/icon1.svg" : type === 1 ? "./img/Properties/PropertiesRange/icon2.svg" : "./img/Properties/PropertiesRange/icon3.svg"

   return (
      <li className={s.container}>
         <div className={s.img_container}>
            <img src={icon} alt="" />
         </div>
         <p className={s.text}>{text}</p>
      </li>
   )
}