import { useState, useLayoutEffect } from 'react'

export const StateScroll = (stateScroll=false) => {

    const [scrolled, setScrolled] = useState(stateScroll)
    useLayoutEffect(() => {
        console.log(scrolled)
        const handleScroll = e => {
        setScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        console.log("aka si esta entrando",scrolled)

        return () => {
        window.removeEventListener("scroll", handleScroll)
        console.log("aka tambien si esta entrando")
        }
    }, [])
    return [scrolled];
}
