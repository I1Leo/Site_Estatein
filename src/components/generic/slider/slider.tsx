import type { TSlider } from "../../../types/generic/slider";
import s from "./slider.module.scss";
import SliderFooter from "./slider-footer/slider-footer";

export default function Slider({
    children,
    length,
    page,
    slides,
    btnText,
    two_slides,
    onChange,
}: TSlider) {
    return (
        <div className={s.container}>
            <ul className={two_slides ? `${s.wrapper} ${s.two_slides}` : s.wrapper}>{children}</ul>
            <SliderFooter
                btnText={btnText!}
                length={length}
                page={page}
                slides={slides}
                onChange={onChange}
            />
        </div>
    );
}
