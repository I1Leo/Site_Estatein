import type { TSliderItem } from "../../../../types/generic/slider-item";
import s from "./slider-item.module.scss";

export default function SliderItem({ children }: TSliderItem) {
    return <li className={s.item}>{children}</li>;
}
