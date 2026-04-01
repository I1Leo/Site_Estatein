
export type ConnectFormDataType = {
    id: string
    label: string
    placeholder: string
    type: string
    options?: string[]
}

export const ConnectFormData : ConnectFormDataType[] = [
    {
        id: "firstName",
        label: "First Name",
        placeholder: "Enter First Name",
        type: "text"
    },
    {
        id: "lastName",
        label: "Last Name",
        placeholder: "Enter Last Name",
        type: "text"
    },
    {
        id: "email",
        label: "Email",
        placeholder: "Enter your Email",
        type: "email"
    },
    {
        id: "tel",
        label: "Phone",
        placeholder: "Enter Phone Number",
        type: "tel"
    },
    {
        id: "lInquiry",
        label: "Inquiry Type",
        placeholder: "Select Inquiry Type",
        type: "select",
        options: ["Type1", "Type2", "Type3"]
    },
    {
        id: "hearAbout",
        label: "How Did You Hear About Us?",
        placeholder: "Select Budget",
        type: "select",
        options: ["Variant1", "Variant2", "Variant3"]
    },
    {
        id: "message",
        label: "Message",
        placeholder: "Enter your Message here...",
        type: "textarea"
    },
]