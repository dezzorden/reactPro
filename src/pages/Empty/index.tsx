import React from 'react';
import Header from "../../components/Header";

interface EmptyPageProps {
    title?:string
}
const EmptyPage:React.FC<EmptyPageProps> = ({title}) =>{
    return (
        <>
            <Header/>
            <div>
                Пустая страница для {title}
            </div>
        </>
    );
};
export default EmptyPage;
