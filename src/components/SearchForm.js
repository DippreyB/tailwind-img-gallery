import React, { useState } from 'react'
import { Accordion, AccordionWrapper } from './Accordion';

export const SearchForm = ({handleFormChange}) => {

    const [text, setText] = useState("");
    const [imageType, setImageType] = useState("all");
    const [order, setOrder] = useState("popular");

    const onSubmit = (e) => {
        e.preventDefault();
        handleFormChange(text, imageType, order);
    }

    return (
        <div className="w-full max-w-xs md:max-w-md rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full">
                <div className="flex items-center border-b-2 border-teal-500 py-2 md:max-w-md w-full">

                    <input onChange={e=>setText(e.target.value)} type="text" placeholder="Search Image Term..." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>

                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>


                <AccordionWrapper > 
                    <Accordion id={"advanced-search"} headerText={"Advanced Search"} color="none">

                        <div className="flex flex-row justify-between flex-wrap">
                            <div>
                                <label htmlFor={"image-type"} className="text-gray-700 mr-2">Image type: </label>
                                <select id={"image-type"} name={'image-type'} onChange={e => setImageType(e.target.value)}>
                                    <option value="all">All</option>
                                    <option value="photo">Photo</option>
                                    <option value="illustration">Illustration</option>
                                    <option value="vector">Vector</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor={"order"} className="text-gray-700 mr-2">View By: </label>
                                <select id={"order"} name={'order'} onChange={e => setOrder(e.target.value)}>
                                    <option value="popular">Popularity</option>
                                    <option value="latest">Most Recent</option>
                                </select>
                            </div>
                        </div>
                    </Accordion>
                    
                </AccordionWrapper>
                
            </form>
        </div>
    )
}
