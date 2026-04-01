
export type PropertiesFormDataType = {
    id: string
    label: string
    placeholder: string
    type: string
    options?: string[]
}

export const PropertiesFormData : PropertiesFormDataType[] = [
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
        id: "location",
        label: "Preferred Location",
        placeholder: "Select Location",
        type: "select",
        options: ["City1", "City2", "City3"]
    },
    {
        id: "propertyType",
        label: "Property Type",
        placeholder: "Select Property Type",
        type: "select",
        options: ["Type1", "Type2", "Type3"]
    },
    {
        id: "bathrooms",
        label: "No. of Bathrooms",
        placeholder: "Select no. of Bathrooms",
        type: "select",
        options: ["1", "2", "3"]
    },
    {
        id: "bedrooms",
        label: "No. of Bedrooms",
        placeholder: "Select no. of Bedrooms",
        type: "select",
        options: ["1", "2", "3"]
    },
    {
        id: "budget",
        label: "Budget",
        placeholder: "Select Budget",
        type: "select",
        options: ["Budget1", "Budget2", "Budget3"]
    },
    {
        id: "message",
        label: "Message",
        placeholder: "Enter your Message here...",
        type: "textarea"
    },
]