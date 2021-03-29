import React, { useState, useEffect, useRef } from 'react'

export const SearchForm = ({handleTermChange}) => {

    const [text, setText] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true);
    const collapsible = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        handleTermChange(text)
    }

    const toggleCollapsible = () =>{
        setIsCollapsed(!isCollapsed);
        console.log("Toggled Collapse!", isCollapsed)
    }
    
    useEffect(() => {
        collapsible.current.classList.toggle("h-full");
        collapsible.current.classList.toggle("h-0");
    }, [isCollapsed])

    return (
        <div className="max-w-xs md:max-w-md rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full">
                <div className="flex items-center border-b-2 border-teal-500 py-2 max-w-xs md:max-w-md">

                    <input onChange={e=>setText(e.target.value)} type="text" placeholder="Search Image Term..." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>

                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>

                <button onClick={()=>toggleCollapsible()} className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded">Adv. Search</button>

                {/* Collapsible */}
                <div className="flex transition-all duration-500" ref={collapsible}>
                    <div className="flex items-center border-b-2 border-teal-500 py-2 max-w-xs md:max-w-md">

                    <input type="text" placeholder="Search Image Term..." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>

                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded">
                        test
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
