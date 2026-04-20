
export type FooterDataType = {
    style: string;
    heading: string;
    headingLink: string;
    links: string[]
}

export const FooterData : FooterDataType[] = [
    {
        style: "item_1",
        heading: "Home",
        headingLink: "/",
        links: ["Hero Section", "Featurs", "Properties", "Testimonials", "FAQ's"]
    },
    {
        style: "item_2",
        heading: "About Us",
        headingLink: "/about-us",
        links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"]
    },
    {
        style: "item_3",
        heading: "Properties",
        headingLink: "/properties",
        links: ["Portfolio", "Categories"]
    },
    {
        style: "item_4",
        heading: "Services",
        headingLink: "/services",
        links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"]
    },
    {
        style: "item_5",
        heading: "Contact Us",
        headingLink: "/contacts",
        links: ["Contact Form", "Our Offices"]
    }
]