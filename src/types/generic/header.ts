export type THeader = {
    active: string;
    mobileProps: [boolean, (newValue: boolean) => void];
    onChange: (current: string, link: string) => void;
};
