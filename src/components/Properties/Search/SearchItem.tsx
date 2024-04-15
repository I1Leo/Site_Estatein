import { useState } from "react"
import s from "./SearchItem.module.scss"
import FormSelectList from "./SearchFormSelectList"

type FormSelectType = {
    id: string
    icon: string
    placeholder: string
    options: string[]
}

export default function FormSelect({ id, icon, placeholder, options }: FormSelectType) {

    const [isDisplay, setIsDisplay] = useState(false)

    const [inputValue, setInputValue] = useState("")

    function handleChange(choice: string) {
        setInputValue(choice)
        setIsDisplay(false)
    }

    return (
        <div id={id} className={s.select}>
            <div className={s.select_container}>
                <div className={s.icon_container}>
                    <img src={icon} alt="" />
                </div>
                <div className={s.input_container}>
                    <input type="text" placeholder={placeholder} value={inputValue} onChange={(event) => handleChange(event.currentTarget.value)} />
                    <button className={s.select_btn} onClick={() => setIsDisplay(!isDisplay)} >
                        <img className={isDisplay ? s.rotate : ''} src="./img/Form/bottom-arrow.svg" alt="" />
                    </button>
                </div>
            </div>
            {isDisplay && <FormSelectList items={options} onChange={handleChange} />}
        </div>
    )
}