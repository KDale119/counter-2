import React, {ReactNode, useEffect, useState} from "react";

type ButtonProps = {
    onClick: () => void
    children: ReactNode
    className: string
}

export default function ButtonCounter({onClick, children, className}: ButtonProps){
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
}