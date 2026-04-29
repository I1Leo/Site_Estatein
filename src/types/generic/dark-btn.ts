export type TDarkBtn = {
    text: string;
    link?: string;
    active?: string;
    onChange?: (current: string, link: string) => void;
};
