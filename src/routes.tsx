import React from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";

interface IGeneralMenu {
    name:string,
    link:string,
    component: ()=>JSX.Element

}
export  const GENERAL_MENU:IGeneralMenu[] = [
    {

        name:'home',
        link:'/',
        component: ()=><HomePage/>
    },
    {
        name:'Pokédex',
        link:'/pokedex',
        component: ()=><EmptyPage title="Pokédex" />

    },
    {
        name:'Legendaries',
        link:'/legendaries',
        component: ()=><EmptyPage title="Legendaries" />
    },
    {
        name:'Documentation',
        link:'/documentation',
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
