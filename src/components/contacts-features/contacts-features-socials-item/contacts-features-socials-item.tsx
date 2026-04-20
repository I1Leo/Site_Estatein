import s from "./contacts-features-socials-item.module.scss"
import type { FeaturesSocialsDataType } from "../../../data/FeaturesSocialsData"

type FeaturesSocialsItemProps = {
   src: string
   data: FeaturesSocialsDataType[]
}

export default function ContactsFeaturesSocialsItem({ src, data }: FeaturesSocialsItemProps) {
   return (
      <li className={s.container}>
         <div className={s.img_container}>
            <img src={src} alt="" />
         </div>
         <ul className={s.list}>
            {
               data.map(item => (
                  <li key={item.social} className={s.item}><a href={item.link}>{item.social}</a></li>
               ))
            }
         </ul>
      </li>
   )
}