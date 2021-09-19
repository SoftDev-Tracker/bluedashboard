import { createContext } from "react";


const global = {
    tasks:[
        {id:1, title:'New project 1', description:'This is a general description on the project. Here you can add whatever you want.'},
        {id:2, title:'Dashboard element', description:'This is a description on the project.'},
        {id:3, title:'Title 1 project', description:'This is a general description on the project. Here you can loot all.'},
        {id:4, title:'Side project LUL', description:'This is a general description on the project. Here you can add whatever you want.'},
        {id:5, title:'Title 5', description:'General description on the project. Here you can add whatever you want.'},
    ],
    user:{
        username:'Carlos',
        token:123456
     }
}


export const UserContext = createContext()

export const GlobalProvider = (props)=>{
    return(
        <UserContext.Provider value={global}>
            { props.children }
        </UserContext.Provider>
    )
}