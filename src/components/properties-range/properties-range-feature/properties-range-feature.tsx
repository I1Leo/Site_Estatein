import type { TPropertiesRangeFeature } from "../../../types/properties/properties-range-feature";
import s from "./properties-range-feature.module.scss";
import icon1 from "../../../img/properties/properties-range/icon1.svg";
import icon2 from "../../../img/properties/properties-range/icon2.svg";
import icon3 from "../../../img/properties/properties-range/icon3.svg";

export default function PropertiesRangeFeature({ type, text }: TPropertiesRangeFeature) {
    const icon = type === 0 ? icon1 : type === 1 ? icon2 : icon3;

    return (
        <li className={s.container}>
            <div className={s.img_container}>
                <img src={icon} alt="" />
            </div>
            <p className={s.text}>{text}</p>
        </li>
    );
}
