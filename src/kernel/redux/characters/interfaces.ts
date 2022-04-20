import { AxiosError, AxiosResponse } from "axios";

export interface CharacterSuccessResponse {
    info: Pagination,
    results: Character[]
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface Location {
    name: string;
    url: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Pagination {
    count?: number;
    pages?: number;
    next?: string | null;
    prev?: string | null;
}

export interface CharacterInitState {
    get: {
        process: boolean,
        pagination: Pagination,
        data: Character[]
    },
}

export interface CharacterActionReducer {
    type?: string,
    response?: AxiosResponse,
    error?: AxiosError
}



