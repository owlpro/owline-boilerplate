import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { NextRouter } from "next/router";

export interface RouterProps {
    router: NextRouter
}

export interface Layout {
    children: ReactJSXElement
}