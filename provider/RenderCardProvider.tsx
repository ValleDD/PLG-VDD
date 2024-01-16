import { RenderCardContext,RenderCardContextType } from "../context/Context/RenderCard";
import React from 'react';
type RenderCardProviderProps={
    children: JSX.Element | JSX.Element[]
}

const RenderCardProvider = (props: RenderCardProviderProps)=>{
    const {children}=props;

    const [isListRender,setIsListRender] = React.useState(true)

    const ToggleIsListRender = ()=> setIsListRender(!isListRender);

    const defaultValue: RenderCardContextType={
        isListRender,
        ToggleIsListRender
    }
    return(
        <RenderCardContext.Provider value={defaultValue}>
            {children}
        </RenderCardContext.Provider>
    )
}

export default RenderCardProvider;