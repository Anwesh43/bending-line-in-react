import { CSSProperties } from "react";

export interface LineStyleProps {
    line : () => CSSProperties,
    container : () => CSSProperties
}

export interface BLRProps {
    w : number, 
    h : number, 
    scale : number, 
    cb : () => void 
}