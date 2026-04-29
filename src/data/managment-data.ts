import icon1 from "../img/services/managment/icon-1.svg";
import icon2 from "../img/services/managment/icon-2.svg";
import icon3 from "../img/services/managment/icon-3.svg";
import icon4 from "../img/services/managment/icon-4.svg";

export type ManagmentDataType = {
    title: string;
    text: string;
    icon: string;
};

export const ManagmentData: ManagmentDataType[] = [
    {
        title: "Tenant Harmony",
        text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
        icon: icon1,
    },
    {
        title: "Maintenance Ease",
        text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
        icon: icon2,
    },
    {
        title: "Financial Peace of Mind",
        text: "Managing property finances can be complex. Our financial experts take care of rent collection.",
        icon: icon3,
    },
    {
        title: "Legal Guardian",
        text: "Stay compliant with property laws and regulations effortlessly.",
        icon: icon4,
    },
];
