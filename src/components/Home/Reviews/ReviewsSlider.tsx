import { useState } from "react";
import Slider from "../../Slider/Slider";
import { ReviewsDataType } from "./ReviewsData";
import SliderItem from "../../Slider/SliderItem";
import s from "./ReviewsSlider.module.scss"
import IconCircle from "../../generic/IconCircle";

type ReviewsSliderType = {
    data: ReviewsDataType[]
    btnText: string
}

export default function ReviewsSlider({ data, btnText }: ReviewsSliderType) {

    const [page, setPage] = useState(0)
    let width = document.documentElement.clientWidth
    const slides = width > 1087 ? 3 : width > 740 ? 2 : 1;
    const list = data.slice(0 + slides * page, slides + slides * page);
    const length = data.length;

    return (
        <Slider btnText={btnText} length={length} page={page} slides={slides} onChange={(page) => setPage(page)}>
            {
                list.map((item) => (
                    <SliderItem key={item.name}>
                        <div className={s.stars_container}>
                            <IconCircle src="./img/Home/Reviews/rating-star.svg" />
                            <IconCircle src="./img/Home/Reviews/rating-star.svg" />
                            <IconCircle src="./img/Home/Reviews/rating-star.svg" />
                            <IconCircle src="./img/Home/Reviews/rating-star.svg" />
                            <IconCircle src="./img/Home/Reviews/rating-star.svg" />
                        </div>
                        <h3 className={s.title}>{item.title}</h3>
                        <p className={s.text}>{item.text}</p>
                        <div className={s.reviewer_container}>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <div>
                                <p className={s.name}>{item.name}</p>
                                <p className={s.location}>{item.location}</p>
                            </div>
                        </div>
                    </SliderItem>
                ))
            }
        </Slider>
    )
}