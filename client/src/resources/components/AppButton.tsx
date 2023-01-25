import React from 'react';
import { AppButtonType } from '../types';


export default function AppButton({ placeHolder, bgColor, fontColor, onClick }: AppButtonType){


    return (
        <>
            <button
            onClick={onClick}
            style={{fontSize:'2.5vw'}}
            className={`py-4 px-5 ${bgColor} ${fontColor} hover:bg-opacity-70 `}>
                {placeHolder}
            </button>
        </>
    )
}