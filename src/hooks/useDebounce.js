import { useState } from 'react'

 const useDebounce = () => {
    const [typingTimout, setTypingTimout] = useState('')

    const debounce = (callBack, deley) => {

        clearTimeout(typingTimout);
        const timeout = setTimeout(() => {
            callBack()
        }, deley)

        setTypingTimout(timeout)
    }
    
    return debounce
}

export default useDebounce