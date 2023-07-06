import { rejects } from 'assert'
import {useState, useEffect, CSSProperties} from 'react'
import { LineStyleProps } from './typing'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) : number => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {
                
            }
        }
    })
    return {
        w, h
    }
}


export const useStyle = (w : number, h : number, scale : number) => {
    const background = 'indigo'
    const position = 'absolute'
    const size = Math.min(w, h) / 10 
    const lineWidth = Math.min(w, h) / 90 
    return {
        
        parentStyle() : CSSProperties {
            return {
                left: `${w / 2}px`,
                top: `${h / 2}px`,
                position
            }
        },

        lineStyle(i : number) : LineStyleProps {
            return {
                container() : CSSProperties {
                    return {
                        position, 
                        transform: `rotate(${45 * (1 - 2 * i) * scale}deg)`
                    }
                },
                line() : CSSProperties {
                    return {
                        position,
                        top: `${-size + i * size}px`,
                        left: `${-lineWidth / 2}px`,
                        width: `${lineWidth}px`,
                        height: `${size}px`,
                        background
                    }
                }
            }
        }

    }
}