import { useState } from "react";
import Slider from "../../Slider/Slider";
import SliderItem from "../../Slider/SliderItem";
import { ClientsDataType } from "./ClientsData";
import GreyBtn from "../../generic/GreyBtn";
import s from "./ClientsSlider.module.scss"

type ClientsSliderType = {
    data: ClientsDataType[]
}

export default function ClientsSlider ({data} : ClientsSliderType) {
    
    const [page, setPage] = useState(0)

    let width = document.documentElement.clientWidth
    const slides = width > 500 ?  2 : 1; 
    const list = data.slice(0 + slides * page, slides + slides * page);
    const length = data.length;

    return (
        <Slider length={length} page={page} slides={slides} two_slides onChange={(page) => setPage(page)}>
            {
                list.map((item) =>(
                    <SliderItem key={item.name}>
                        <div className={s.item_header}>
                            <div>
                                <p className={s.period}>Since {item.period}</p>
                                <h3 className={s.name}>{item.name}</h3>
                            </div>
                            <GreyBtn text="Visit Website"/>
                        </div>
                        <div className={s.item_body}>
                            <div className={s.item_body_component}>
                                <p className={`${s.item_body_heading} ${s.item_body_heading_domain}`}>Domain</p>
                                <p className={s.item_body_text}>{item.domain}</p>
                            </div>
                            <div className={s.item_body_component}>
                                <p className={`${s.item_body_heading} ${s.item_body_heading_category}`}>Category</p>
                                <p className={s.item_body_text}>{item.category}</p>
                            </div>
                        </div>
                        <div className={s.item_review}>
                            <p className={s.item_review_heading}>What they Said</p>
                            <p className={s.item_review_text}>{item.review}</p>
                        </div>
                    </SliderItem>
                ))
            }
        </Slider>
    )


}