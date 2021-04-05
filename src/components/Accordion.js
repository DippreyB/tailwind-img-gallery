import React, { useRef } from 'react'
import { BsChevronUp,BsChevronDown  } from 'react-icons/bs';

export const AccordionWrapper = ({children}) => {
    const [accordionID, setAccordionID] = React.useState('');
    const toggleCollapse = (id) => {
        setAccordionID((prevID) => (prevID !== id ? id : '')); //Set new id when another accord header is clicked.
                                                               //set to '' when we close current open accord
    }
    
    return (
        <div>
            {Array.isArray(children) ?
                children.map(child => ( //Since we are making accordions in the parent component, we have to clone with props
                    React.cloneElement(child, {isOpen: accordionID, toggleCollapse: toggleCollapse, key: child.props.id})
                )) :
                React.cloneElement(children, {isOpen: accordionID, toggleCollapse: toggleCollapse, key: children.props.id})
            }
        </div>
    )
}

export const Accordion = ({children, id, isOpen, toggleCollapse, headerText, color}) => (
    <>
        <AccordionHeader id={id} headerText={headerText} toggleCollapse={toggleCollapse} color={color} isOpen={isOpen} />
        <AccordionBody children={children} id={id} isOpen={isOpen} />
    </>
)


const AccordionBody = ({children, id, isOpen}) => {
    const ref = useRef();
    const style = isOpen === id ? {height: ref.current?.scrollHeight} : {height: 0};
    return (
        <div
            id={id}
            className="overflow-hidden md: overflow-x-hidden transition-height ease duration-300 text-gray-600"
            ref={ref}
            style={style}
        >
            {children}
        </div>
    )
}

const AccordionHeader = ({id, toggleCollapse, headerText, color, isOpen}) => (
    <div
        role="button"
        id={id}
        onClick={() => toggleCollapse(id)}
        className={colors[color]}
    >
        <div className="flex flex-row justify-between">
            {headerText}
            { isOpen === id ?
                <BsChevronUp/> :
                <BsChevronDown />
            }
        </div>
    </div>
)

const colors = {
    gray: "block focus:outline-none bg-gray-800 text-white border-b my-2 p-3",
    green: "block focus:outline-none bg-green-600 text-white border-b my-2 p-3",
    red: "block focus:outline-none bg-red-800 text-white border-b my-2 p-3",
    blue: "block focus:outline-none bg-blue-900 text-white border-b my-2 p-3",
    indigo: "block focus:outline-none bg-indigo-900 text-white border-b my-2 p-3",
    purple: "block focus:outline-none bg-purple-900 text-white border-b my-2 p-3",
    yellow: "block focus:outline-none bg-yellow-400 text-white border-b my-2 p-3",
    pink: "block focus:outline-none bg-pink-200 text-gray-800 border-b my-2 p-3",
    none: "block focus:outline-none  text-gray-400 border-b my-2 p-3"
}
