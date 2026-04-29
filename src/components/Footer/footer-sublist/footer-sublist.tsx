import type { TFooterSublist } from "../../../types/generic/footer-sublist";
import FooterItem from "../footer-item/footer-item";
import s from "./footer-sublist.module.scss";

export default function FooterSublist({ item }: TFooterSublist) {
    return (
        <ul className={`${s.container} ${s[`${item.style}`]}`}>
            <FooterItem heading text={item.heading} link={item.headingLink} />
            {item.links.map((item) => (
                <FooterItem key={item} text={item} />
            ))}
        </ul>
    );
}
