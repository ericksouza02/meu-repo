import {useEffect} from 'react'

export const useScrollToTop = () => {
    useEffect(()=> {
        //window.scrollTo(0, 0)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
}