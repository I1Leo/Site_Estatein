import { useState } from "react"
import s from "./FormSelect.module.scss"
import FormSelectList from "./FormSelectList"

type FormSelectType = {
    id: string
    placeholder: string
    options: string[]
}

export default function FormSelect ({id, placeholder, options} : FormSelectType) {
    
    const [isDisplay, setIsDisplay] = useState(false)

    const [inputValue, setInputValue] = useState("")

    function handleChange (choice : string) {
        setInputValue(choice)
        setIsDisplay(false)
    }

    return (
        <div  id={id} className={s.select}>
            <div className={s.select_header}>
                <input readOnly type="text" placeholder={placeholder} value={inputValue} onChange={(event) => handleChange(event.currentTarget.value)}/>
                <button className={s.select_btn} onClick={() => setIsDisplay(!isDisplay)} >
                    <img className={isDisplay ? s.rotate : ''} src="./img/Form/bottom-arrow.svg" alt="" />
                </button>
            </div>
            {isDisplay && <FormSelectList items={options} onChange={handleChange}/>}
            

        </div>
    )
}