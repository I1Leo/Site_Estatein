import type { TConnectForm } from "../../../types/contacts/connect-form";
import PurpleBtn from "../../generic/purple-btn/purple-btn";
import s from "./connect-form.module.scss";
import FormSelect from "../../generic/form/form-select/form-select";
import FormTextarea from "../../generic/form/form-textarea/form-textarea";
import FormInput from "../../generic/form/form-input/form-input";

export default function ConnectForm({ data }: TConnectForm) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form action="#" className={s.form} onSubmit={handleSubmit}>
            {data.map((item) => (
                <div
                    key={item.id}
                    className={
                        item.label === "Budget"
                            ? `${s.item} ${s.big}`
                            : item.label === "Message"
                              ? `${s.item} ${s.textarea}`
                              : s.item
                    }
                >
                    <label htmlFor={item.id}>{item.label}</label>
                    {item.type === "select" && item.options && (
                        <FormSelect
                            id={item.id}
                            placeholder={item.placeholder}
                            options={item.options}
                        />
                    )}
                    {item.type === "textarea" && (
                        <FormTextarea
                            id={item.id}
                            placeholder={item.placeholder}
                            cols={1}
                            rows={6}
                        />
                    )}
                    {item.type !== "select" && item.type !== "textarea" && (
                        <FormInput id={item.id} placeholder={item.placeholder} type={item.type} />
                    )}
                </div>
            ))}
            <div className={s.form_footer}>
                <div className={s.agreement}>
                    <input type="checkbox" id="agreement" className={s.agreement_checkbox} />
                    <label htmlFor="agreement">
                        I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </label>
                </div>
                <PurpleBtn text="Send Your Message" />
            </div>
        </form>
    );
}
