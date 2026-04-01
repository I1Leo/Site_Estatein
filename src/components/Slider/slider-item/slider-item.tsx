
import s from "./slider-item.module.scss"

type SliderItemProps = {
   children: any
}

export default function SliderItem ({children} : SliderItemProps) {
   return (
      <li className={s.item}>
         {children}
      </li>
   )
}