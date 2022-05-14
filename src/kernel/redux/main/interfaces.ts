import { Direction } from "@mui/material";

export interface Language {
    key: string;
    title: string;
    direction: Direction
}

export interface MainInitialState {
    language: Language
}