import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import s from "./explore.module.scss";
import img1 from "../../img/contacts/explore/img1.jpeg";
import img2 from "../../img/contacts/explore/img2.jpeg";
import img3 from "../../img/contacts/explore/img3.jpeg";
import img4 from "../../img/contacts/explore/img4-small.jpeg";
import img5 from "../../img/contacts/explore/img5-small.jpeg";
import img6 from "../../img/contacts/explore/img6.jpeg";

export default function Explore() {
    const text =
        "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.";

    return (
        <Section>
            {document.documentElement.clientWidth > 960 && (
                <div className={s.container}>
                    <div className={`${s.item} ${s.item_text}`}>
                        <SectionHeader title="Explore Estatein's World" text={text} />
                    </div>
                    <div className={`${s.item} ${s.item_1}`}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={`${s.item} ${s.item_2}`}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={`${s.item} ${s.item_3}`}>
                        <img src={img3} alt="" />
                    </div>
                    <div className={`${s.item} ${s.item_4}`}>
                        <img src={img4} alt="" />
                    </div>
                    <div className={`${s.item} ${s.item_5}`}>
                        <img src={img5} alt="" />
                    </div>
                    <div className={`${s.item} ${s.item_6}`}>
                        <img src={img6} alt="" />
                    </div>
                </div>
            )}
            {document.documentElement.clientWidth <= 960 && (
                <div className={s.container}>
                    <div className={s.header}>
                        <div className={`${s.item} ${s.item_1}`}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={`${s.item} ${s.item_2}`}>
                            <img src={img2} alt="" />
                        </div>
                        <div className={`${s.item} ${s.item_3}`}>
                            <img src={img3} alt="" />
                        </div>
                        <div className={`${s.item} ${s.item_4}`}>
                            <img src={img4} alt="" />
                        </div>
                        <div className={`${s.item} ${s.item_5}`}>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className={`${s.item} ${s.item_text}`}>
                        <SectionHeader title="Explore Estatein's World" text={text} />
                    </div>
                    <div className={`${s.item} ${s.item_6}`}>
                        <img src={img6} alt="" />
                    </div>
                </div>
            )}
        </Section>
    );
}
