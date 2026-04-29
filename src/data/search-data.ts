import locationIcon from "../img/properties/search/location-icon.svg";
import propertyIcon from "../img/properties/search/property-icon.svg";
import pricingIcon from "../img/properties/search/pricing-icon.svg";
import sizeIcon from "../img/properties/search/size-icon.svg";
import yearIcon from "../img/properties/search/year-icon.svg";

export type SearchDataType = {
    id: string;
    placeholder: string;
    options: string[];
    icon: string;
};

export const SearchData: SearchDataType[] = [
    {
        id: "loc",
        placeholder: "Location",
        options: ["Location1", "Location2", "Location3"],
        icon: locationIcon,
    },
    {
        id: "property",
        placeholder: "Property Type",
        options: ["Type1", "Type2", "Type3"],
        icon: propertyIcon,
    },
    {
        id: "pricing",
        placeholder: "Pricing Range",
        options: ["Type1", "Type2", "Type3"],
        icon: pricingIcon,
    },
    {
        id: "size",
        placeholder: "Property Size",
        options: ["Size1", "Size2", "Size3"],
        icon: sizeIcon,
    },
    {
        id: "buildYear",
        placeholder: "Build Year",
        options: ["Year1", "Year2", "Year3"],
        icon: yearIcon,
    },
];
