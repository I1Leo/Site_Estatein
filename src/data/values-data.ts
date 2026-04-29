import starIcon from "../img/about-us/values/star.svg";
import headIcon from "../img/about-us/values/head.svg";
import peopleIcon from "../img/about-us/values/people.svg";

export type ValuesDataType = {
    title: string;
    text: string;
    icon: string;
};

export const ValuesData: ValuesDataType[] = [
    {
        title: "Trust",
        text: "Trust is the cornerstone of every successful real estate transaction.",
        icon: starIcon,
    },
    {
        title: "Excellencet",
        text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
        icon: headIcon,
    },
    {
        title: "Client-Centric",
        text: "Your dreams and needs are at the center of our universe. We listen, understand.",
        icon: peopleIcon,
    },
    {
        title: "Our Commitment",
        text: "Trust is the cornerstone of every successful real estate transaction.",
        icon: starIcon,
    },
];
