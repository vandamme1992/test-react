import React from 'react';
import {PropagateLoader} from "react-spinners";
import style from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={style.Spinner}>
            <PropagateLoader
                color="#36d7b7" />
        </div>
    );
};

export default Spinner;
