import s from "./FeaturesItem.module.scss"

type FeaturesItemProps = {
   src: string
   text: string
}

export default function FeaturesItem({ src, text }: FeaturesItemProps) {
   return (
      <li className={s.container}>
         <div className={s.img_container}>
            <img src={src} alt="" />
         </div>
         <p className={s.text}>{text}</p>
      </li>
   )
}