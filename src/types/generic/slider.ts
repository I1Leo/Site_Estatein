import type { ReactNode } from "react";

export type TSlider = {
    length: number;
    page: number;
    slides: number;
    btnText?: string;
    onChange: (page: number) => void;
    children: ReactNode;
    two_slides?: boolean;
};
