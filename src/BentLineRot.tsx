import React from "react";
import { useStyle } from "./hooks";
import { BLRProps, LineStyleProps } from "./typing";
import withContext from "./withContext";


interface LineProps {
    style : LineStyleProps
}
const LineComponent = (props : LineProps) => {
    return (
        <div style = {props.style.container()}>
            <div style = {props.style.line()}>
            </div>
        </div>
    )
}

const BentLineRot : React.FC<BLRProps> = (props : BLRProps) => {
    const {parentStyle, lineStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()} onClick = {() => props.cb()}>
            {[0, 1].map((i : number) => <LineComponent key = {`line_${i}`} style = {lineStyle(i)}/>)}
        </div>
    )
}

export default withContext(BentLineRot)