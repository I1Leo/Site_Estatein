import propertie1 from "../img/home/properties/propertie1.jpeg";
import propertie2 from "../img/home/properties/propertie2.jpeg";
import propertie3 from "../img/home/properties/propertie3.jpeg";

export type PropertiesDataType = {
    name: string;
    img: string;
    description: string;
    features: string[];
    price: string;
};

export const PropertiesData: PropertiesDataType[] = [
    {
        name: "Seaside Serenity Villa_1",
        img: propertie1,
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        features: ["4-Bedroom", "3-Bathroom", "Villa"],
        price: "$550,000",
    },
    {
        name: "Metropolitan Haven_1",
        img: propertie2,
        description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
        features: ["2-Bedroom", "2-Bathroom", "Apartment"],
        price: "$450,000",
    },
    {
        name: "Rustic Retreat Cottage_1",
        img: propertie3,
        description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
        features: ["3-Bedroom", "3-Bathroom", "Townhouse"],
        price: "$400,000",
    },
    {
        name: "Metropolitan Haven_2",
        img: propertie2,
        description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
        features: ["2-Bedroom", "2-Bathroom", "Apartment"],
        price: "$450,000",
    },
    {
        name: "Seaside Serenity Villa_2",
        img: propertie1,
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        features: ["4-Bedroom", "3-Bathroom", "Villa"],
        price: "$550,000",
    },
    {
        name: "Rustic Retreat Cottage_2",
        img: propertie3,
        description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
        features: ["3-Bedroom", "3-Bathroom", "Townhouse"],
        price: "$400,000",
    },
    {
        name: "Rustic Retreat Cottage_3",
        img: propertie3,
        description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
        features: ["3-Bedroom", "3-Bathroom", "Townhouse"],
        price: "$400,000",
    },
    {
        name: "Seaside Serenity Villa_3",
        img: propertie1,
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
        features: ["4-Bedroom", "3-Bathroom", "Villa"],
        price: "$550,000",
    },
    {
        name: "Metropolitan Haven_3",
        img: propertie2,
        description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
        features: ["2-Bedroom", "2-Bathroom", "Apartment"],
        price: "$450,000",
    },
];
