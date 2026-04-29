import icon1 from "../img/services/investments/icon-1.svg";
import icon2 from "../img/services/investments/icon-2.svg";
import icon3 from "../img/services/investments/icon-3.svg";
import icon4 from "../img/services/investments/icon-4.svg";

export type InvestmentsDataType = {
    title: string;
    text: string;
    icon: string;
};

export const InvestmentsData: InvestmentsDataType[] = [
    {
        title: "Market Insight",
        text: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
        icon: icon1,
    },
    {
        title: "ROI Assessment",
        text: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
        icon: icon2,
    },
    {
        title: "Customized Strategies",
        text: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
        icon: icon3,
    },
    {
        title: "Diversification Mastery",
        text: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
        icon: icon4,
    },
];
