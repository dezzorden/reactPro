import React from 'react';
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import {navigate} from "hookrouter";
import {LinkEnum} from "../../routes";

const HomePage = () =>{
    return (
        <>
            <Parallax></Parallax>
            <Footer></Footer>
            <Button onClick={()=>navigate(LinkEnum.POKEDEX)}>See Pockemons</Button>
        </>
    );
};
export default HomePage;
