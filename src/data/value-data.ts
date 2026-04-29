import icon1 from "../img/services/value/icon-1.svg";
import icon2 from "../img/services/value/icon-2.svg";
import icon3 from "../img/services/value/icon-3.svg";
import icon4 from "../img/services/value/icon-4.svg";

export type ValueDataType = {
    title: string;
    text: string;
    icon: string;
};

export const ValueData: ValueDataType[] = [
    {
        title: "Valuation Mastery",
        text: "Discover the true worth of your property with our expert valuation services.",
        icon: icon1,
    },
    {
        title: "Strategic Marketing",
        text: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
        icon: icon2,
    },
    {
        title: "Negotiation Wizardry",
        text: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
        icon: icon3,
    },
    {
        title: "Closing Success",
        text: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
        icon: icon4,
    },
];
