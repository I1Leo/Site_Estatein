import type { TIconCircle } from "../../../types/generic/icon-circle";
import s from "./icon-circle.module.scss";

export default function IconCircle({ src, dark }: TIconCircle) {
    return (
        <div className={dark ? `${s.container} ${s.dark}` : s.container}>
            <img src={src} alt="" />
        </div>
    );
}
