import { useState } from "react";
import type { TFormSelect } from "../../../types/properties/search-item";
import s from "./search-item.module.scss";
import SearchFormSelectList from "../search-form-select-list/search-form-select-list";
import bottomArrow from "../../../img/form/bottom-arrow.svg";

export default function FormSelect({ id, icon, placeholder, options }: TFormSelect) {
    const [isDisplay, setIsDisplay] = useState(false);

    const [inputValue, setInputValue] = useState("");

    function handleChange(choice: string) {
        setInputValue(choice);
        setIsDisplay(false);
    }

    return (
        <div id={id} className={s.select}>
            <div className={s.select_container}>
                <div className={s.icon_container}>
                    <img src={icon} alt="" />
                </div>
                <div className={s.input_container}>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(event) => handleChange(event.currentTarget.value)}
                    />
                    <button className={s.select_btn} onClick={() => setIsDisplay(!isDisplay)}>
                        <img className={isDisplay ? s.rotate : ""} src={bottomArrow} alt="" />
                    </button>
                </div>
            </div>
            {isDisplay && <SearchFormSelectList items={options} onChange={handleChange} />}
        </div>
    );
}
