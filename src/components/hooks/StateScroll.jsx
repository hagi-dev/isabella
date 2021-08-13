import { useState, useLayoutEffect } from 'react'

export const StateScroll = (stateScroll=false) => {

    const [scrolled, setScrolled] = useState(stateScroll)
    useLayoutEffect(() => {
        console.log(scrolled)
        const handleScroll = e => {
        setScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        

        return () => {
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return [scrolled];
}
