import React from "react";
import { useAnimatedScale, useDimension } from "./hooks";

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : cb} = useAnimatedScale()
        const newProps = {
            ...props, 
            scale, 
            cb, 
            w, 
            h 
        }
        return (
            <MainComponent {...newProps}></MainComponent>
        )
    }
}

export default withContext