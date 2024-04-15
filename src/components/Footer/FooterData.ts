
export type FooterDataType = {
    style: string;
    heading: string
    links: string[]
}

export const FooterData : FooterDataType[] = [
    {
        style: "item_1",
        heading: "Home",
        links: ["Hero Section", "Featurs", "Properties", "Testimonials", "FAQ's"]
    },
    {
        style: "item_2",
        heading: "About Us",
        links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"]
    },
    {
        style: "item_3",
        heading: "Properties",
        links: ["Portfolio", "Categories"]
    },
    {
        style: "item_4",
        heading: "Services",
        links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"]
    },
    {
        style: "item_5",
        heading: "Contact Us",
        links: ["Contact Form", "Our Offices"]
    }
]