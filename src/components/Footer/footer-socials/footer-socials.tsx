import type { TFooterSocials } from "../../../types/generic/footer-socials";
import IconCircle from "../../generic/icon-circle/icon-circle";
import s from "./footer-socials.module.scss";

export default function FooterSocials({ data }: TFooterSocials) {
    return (
        <ul className={s.container}>
            {data.map((src, index) => (
                <li key={index}>
                    <IconCircle dark src={src} />
                </li>
            ))}
        </ul>
    );
}
