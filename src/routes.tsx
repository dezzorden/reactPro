import React from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";
import PokedexPage from "./pages/Pokedex";

interface IGeneralMenu {
    name:string,
    link:LinkEnum,
    component: ()=>JSX.Element

}

export enum LinkEnum{
    HOME='/',
    POKEDEX='/pokedex',
    LEGENDARIES='/legendaries',
    DOCUMENTATION='/documentation',

}
export  const GENERAL_MENU:IGeneralMenu[] = [
    {

        name:'home',
        link:LinkEnum.HOME,
        component: ()=><HomePage/>
    },
    {
        name:'Pokédex',
        link:LinkEnum.POKEDEX,
        component: ()=><PokedexPage />

    },
    {
        name:'Legendaries',
        link:LinkEnum.LEGENDARIES,
        component: ()=><EmptyPage title="Legendaries" />
    },
    {
        name:'Documentation',
        link:LinkEnum.DOCUMENTATION,
        component: ()=><EmptyPage title="Documentation" />
    },



]

interface IAccMenu {
    [n:string]: ()=>JSX.Element
}
const routes = GENERAL_MENU.reduce((acc:IAccMenu,item:IGeneralMenu)=>{

    acc[item.link] = item.component;
    return acc;
},{})

export default routes;
