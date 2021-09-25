import {useState} from 'react'

const useModal = (state) => {
    
    const [state, setState] = useState(state);

    const show = ()=>{
        useState(true)
    }

    const close = ()=>{
        useState(false)
    }
    
    return {state, show, close}
}

export default useModal
