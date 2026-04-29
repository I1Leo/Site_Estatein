import reviewer1 from "../img/home/reviews/reviewer-1.png";
import reviewer2 from "../img/home/reviews/reviewer-2.png";
import reviewer3 from "../img/home/reviews/reviewer-3.png";

export type ReviewsDataType = {
    name: string;
    location: string;
    image: string;
    title: string;
    text: string;
};

export const ReviewsData: ReviewsDataType[] = [
    {
        name: "Wade Warren",
        location: "USA, California",
        image: reviewer1,
        title: "Exceptional Service!_1",
        text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
        name: "Emelie Thomson",
        location: "USA, Florida",
        image: reviewer2,
        title: "Efficient and Reliable_1",
        text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    },
    {
        name: "John Mans",
        location: "USA, Nevada",
        image: reviewer3,
        title: "Trusted Advisors_1",
        text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    },
    {
        name: "Emelie Thomson",
        location: "USA, Florida",
        image: reviewer2,
        title: "Efficient and Reliable_2",
        text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    },
    {
        name: "Wade Warren",
        location: "USA, California",
        image: reviewer1,
        title: "Exceptional Service!_2",
        text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
        name: "John Mans",
        location: "USA, Nevada",
        image: reviewer3,
        title: "Trusted Advisors_2",
        text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    },
    {
        name: "John Mans",
        location: "USA, Nevada",
        image: reviewer3,
        title: "Trusted Advisors_3",
        text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    },
    {
        name: "Wade Warren",
        location: "USA, California",
        image: reviewer1,
        title: "Exceptional Service!_3",
        text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
        name: "Emelie Thomson",
        location: "USA, Florida",
        image: reviewer2,
        title: "Efficient and Reliable_3",
        text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    },
];
