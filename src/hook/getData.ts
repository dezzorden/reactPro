import {useEffect, useState} from "react";
import req from "../utils/request";

export interface PokemonsData {
    abilities: string[];
    ['base_experience']: number;
    height: number;
    id: number;
    ['is_default']: boolean;
    name: string;
    ['name_clean']: string;
    order: number;
    stats: {
        attack: number;
        defense: number;
        hp: number;
        speed: number;
    };
    types: string[];
    weight: number;
    img: string;
}

export interface Resp {
    count: number;
    limit: number;
    offset: number;
    pokemons: PokemonsData[];
    total: number;
}

const useData = (endpoint:string,query:object,deps:any[] = []) => {
    const [data, setData] = useState<Resp>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const result = await req(endpoint,query);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, deps);
    return {
        data,
        isLoading,
        isError,
    };
};

export default useData;
