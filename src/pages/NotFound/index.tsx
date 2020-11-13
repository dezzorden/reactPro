import React from 'react';
import s from './NotFound.module.scss';
import TeamRocketPng from './assets/teamRocket.png';
import Button from "../../components/Button";

const NotFoundPage = () => {
    return (
        <div className={s.root}>
            <div className={s.wrapper}>

                <div className={s.groupBlock}>

                    <p className={s.p404}>404</p>
                    <div className={s.index}>
                        <img src={TeamRocketPng} alt="Small PokeBall" />

                        <div className={s.titleText}>
                            The rocket team <span className={s.black}> has won this time.</span>
                            <Button>Return</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
