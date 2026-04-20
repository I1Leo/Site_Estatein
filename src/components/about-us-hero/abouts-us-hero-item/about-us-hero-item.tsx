import s from "./about-us-hero-item.module.scss"

type PromoItemProps = {
   title: string
   text: string
   big?: boolean
}

export default function AboutUsHeroItem ({title, text, big} : PromoItemProps) {
   return (
      <li className={big ? `${s.container} ${s.big}` : s.container}>
         <h3 className={s.title}>{title}</h3>
         <p className={s.text}>{text}</p>
      </li>
   )
}