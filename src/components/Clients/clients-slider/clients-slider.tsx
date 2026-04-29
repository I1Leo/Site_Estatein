import { useState } from "react";
import type { TClientsSlider } from "../../../types/about-us/clients-slider";
import Slider from "../../generic/slider/slider";
import SliderItem from "../../generic/slider/slider-item/slider-item";
import GreyBtn from "../../generic/grey-btn/grey-btn";
import s from "./clients-slider.module.scss";
import { useWindowWidth } from "../../../hooks";

export default function ClientsSlider({ data }: TClientsSlider) {
    const [page, setPage] = useState(0);

    const width = useWindowWidth();
    const slides = width > 500 ? 2 : 1;
    const list = data.slice(0 + slides * page, slides + slides * page);
    const length = data.length;

    return (
        <Slider
            length={length}
            page={page}
            slides={slides}
            two_slides
            onChange={(page) => setPage(page)}
        >
            {list.map((item) => (
                <SliderItem key={item.name}>
                    <div className={s.item_header}>
                        <div>
                            <p className={s.period}>Since {item.period}</p>
                            <h3 className={s.name}>{item.name}</h3>
                        </div>
                        <GreyBtn text="Visit Website" />
                    </div>
                    <div className={s.item_body}>
                        <div className={s.item_body_component}>
                            <p className={`${s.item_body_heading} ${s.item_body_heading_domain}`}>
                                Domain
                            </p>
                            <p className={s.item_body_text}>{item.domain}</p>
                        </div>
                        <div className={s.item_body_component}>
                            <p className={`${s.item_body_heading} ${s.item_body_heading_category}`}>
                                Category
                            </p>
                            <p className={s.item_body_text}>{item.category}</p>
                        </div>
                    </div>
                    <div className={s.item_review}>
                        <p className={s.item_review_heading}>What they Said</p>
                        <p className={s.item_review_text}>{item.review}</p>
                    </div>
                </SliderItem>
            ))}
        </Slider>
    );
}
