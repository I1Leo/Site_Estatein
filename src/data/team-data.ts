import team1 from "../img/about-us/team/team-1.png";
import team2 from "../img/about-us/team/team-2.png";
import team3 from "../img/about-us/team/team-3.png";
import team4 from "../img/about-us/team/team-4.png";

export type TeamDataType = {
    name: string;
    position: string;
    img: string;
};

export const TeamData: TeamDataType[] = [
    {
        name: "Max Mitchell",
        position: "Founder",
        img: team1,
    },
    {
        name: "Sarah Johnson",
        position: "Chief Real Estate Officer",
        img: team2,
    },
    {
        name: "David Brown",
        position: "Head of Property Management",
        img: team3,
    },
    {
        name: "Michael Turner",
        position: "Legal Counsel",
        img: team4,
    },
];
