import type { TLogo } from "../../../types/generic/logo";
import s from "./logo.module.scss";

export default function Logo({ src }: TLogo) {
    return (
        <div className={s.container}>
            <img src={src} alt="" />
        </div>
    );
}
