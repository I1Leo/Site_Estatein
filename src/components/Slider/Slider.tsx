import s from "./Slider.module.scss"
import SliderFooter from "./SliderFooter"
import { ReactNode } from 'react';

type sliderProps = {
   length: number
   page: number
   slides: number
   btnText?: string
   onChange: (page: number) => void
   children: ReactNode
   two_slides?: boolean
}

export default function Slider({children, length, page, slides, btnText, two_slides, onChange} : sliderProps) {
   return (
      <div className={s.container}>
         <ul className={two_slides ? `${s.wrapper} ${s.two_slides}` : s.wrapper}>
            {children}
         </ul>
         <SliderFooter btnText={btnText!} length={length} page={page} slides={slides} onChange={onChange} />
      </div>
   )
}