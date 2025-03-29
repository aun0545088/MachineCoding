import React, { useState } from 'react'
import json from './data.json'
import './style.css'

//Render lists of objects
const List = ({ list }) => {
    // const [isExpanded, setIsExpanded] = useState(false)
    const [isExpanded, setIsExpanded] = useState({})
    return (
        <div className='container'>
            {list.map((node) => (
                <div key={node.id}>
                    {
                        node.isFolder &&
                        (
                            <span onClick={() =>
                                setIsExpanded((prev) => ({
                                    ...prev,
                                    [node.name]: !prev[node.name]
                                }))
                            }
                            >
                                {isExpanded?.[node.name] ? "-" : "+"}
                            </span>
                        )
                    }
                    <span>{node.name}</span>
                    {isExpanded?.[node.name] && node.children &&
                        (<List list={node.children} />
                        )}
                </div>
            ))}
        </div>
    )
}

const NestedFile = () => {
    const [data] = useState(json)
    return (
        <div>
            <h1>File/Folder Explorer</h1>
            <List list={data} />
        </div>
    )
}

export default NestedFile