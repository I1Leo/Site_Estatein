import s from "./PropertiesFeature.module.scss"

type PropertiesFeaturesProps = {
   type: number,
   text: string
}

export default function PropertiesFeature ({type, text} : PropertiesFeaturesProps) {
   
   const icon = type === 0 ? "./img/Home/Properties/icon1.svg" : type === 1 ? "./img/Home/Properties/icon2.svg" : "./img/Home/Properties/icon3.svg"

   return (
      <li className={s.container}>
         <div className={s.img_container}>
            <img src={icon} alt="" />
         </div>
         <p className={s.text}>{text}</p>
      </li>
   )
}