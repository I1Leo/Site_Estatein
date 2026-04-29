import { useState } from "react";
import type { TFAQSlider } from "../../../types/home/faq-slider";
import Slider from "../../generic/slider/slider";
import SliderItem from "../../generic/slider/slider-item/slider-item";
import GreyBtn from "../../generic/grey-btn/grey-btn";
import s from "./faq-slider.module.scss";
import { useWindowWidth } from "../../../hooks";

export default function FAQSlider({ data, btnText }: TFAQSlider) {
    const [page, setPage] = useState(0);
    const width = useWindowWidth();
    const slides = width > 1087 ? 3 : width > 740 ? 2 : 1;
    const list = data.slice(0 + slides * page, slides + slides * page);
    const length = data.length;

    return (
        <Slider
            btnText={btnText}
            length={length}
            page={page}
            slides={slides}
            onChange={(page) => setPage(page)}
        >
            {list.map((item, index) => (
                <SliderItem key={index}>
                    <div className={s.title_container}>
                        <h3 className={s.title}>{item.title}</h3>
                    </div>
                    <p className={s.text}>{item.text}</p>
                    <GreyBtn text="Read More" />
                </SliderItem>
            ))}
        </Slider>
    );
}
