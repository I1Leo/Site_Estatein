import { useState } from "react"
import Slider from "../../Slider/Slider"
import { FAQDataType } from "./FAQData"
import SliderItem from "../../Slider/SliderItem"
import GreyBtn from "../../generic/GreyBtn"
import s from "./FAQSlider.module.scss"

type FAQSliderType = {
    data: FAQDataType[]
    btnText: string
}

export default function FAQSlider ({data, btnText} : FAQSliderType) {
    
    const [page, setPage] = useState(0);
    let width = document.documentElement.clientWidth
    const slides = width > 1087 ? 3 : width > 740 ? 2 : 1; 
    const list = data.slice(0 + slides * page, slides + slides * page);
    const length = data.length;
    
    return (

        <Slider btnText={btnText} length={length} page={page} slides={slides} onChange={(page) => setPage(page)}>
            {list.map((item, index) => (
                <SliderItem key={index}>
                    <div className={s.title_container}>
                        <h3 className={s.title}>{item.title}</h3>
                    </div>
                    <p className={s.text}>{item.text}</p>
                    <GreyBtn text="Read More"/>
                </SliderItem>
            ))}
        </Slider>
    )
}