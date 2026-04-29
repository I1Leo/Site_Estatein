import type { TSliderFooter } from "../../../../types/generic/slider-footer";
import GreyBtn from "../../grey-btn/grey-btn";
import NextBtn from "../../next-btn/next-btn";
import PrevBtn from "../../prev-btn/prev-btn";
import s from "./slider-footer.module.scss";
import { useWindowWidth } from "../../../../hooks";

export default function SliderFooter({ length, page, slides, btnText, onChange }: TSliderFooter) {
    const width = useWindowWidth();

    return (
        <footer className={!btnText && width <= 960 ? `${s.footer} ${s.titleless}` : s.footer}>
            {width > 960 && (
                <>
                    <p>
                        <span>{page + 1}</span> of <span>{Math.ceil(length / slides)}</span>
                    </p>
                    <div className={s.btns_container}>
                        <PrevBtn page={page} onChange={onChange} />
                        <NextBtn length={length} page={page} slides={slides} onChange={onChange} />
                    </div>
                </>
            )}

            {width <= 960 && btnText && (
                <>
                    <GreyBtn text={btnText} />
                    <div className={s.btns_container}>
                        <PrevBtn page={page} onChange={onChange} />
                        <p>
                            <span>{page + 1}</span> of <span>{Math.ceil(length / slides)}</span>
                        </p>
                        <NextBtn length={length} page={page} slides={slides} onChange={onChange} />
                    </div>
                </>
            )}

            {width <= 960 && !btnText && (
                <>
                    <div className={s.btns_container}>
                        <PrevBtn page={page} onChange={onChange} />
                        <p>
                            <span>{page + 1}</span> of <span>{Math.ceil(length / slides)}</span>
                        </p>
                        <NextBtn length={length} page={page} slides={slides} onChange={onChange} />
                    </div>
                </>
            )}
        </footer>
    );
}
