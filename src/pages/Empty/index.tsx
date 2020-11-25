import React from 'react';

interface EmptyPageProps {
    title?:string
}
const EmptyPage:React.FC<EmptyPageProps> = ({title}) =>{
    return (
        <>
            <div>
                Пустая страница для {title}
            </div>
        </>
    );
};
export default EmptyPage;
