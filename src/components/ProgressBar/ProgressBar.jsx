import React from 'react'
import './style.css'

const ProgressBar = ({ progress }) => {
    return (
        <>
            <h1>Progress Bar</h1>
            <div className='outer'>
                <div className='inner'
                    style={{ 
                        width: `${progress}%`, 
                        color: progress < 5 ? "black" : "white" }}
                        role='progressbar'
                        aria-valuenow={progress}
                        aria-valuemax={'100'}
                        aria-valuemin={'0'}
                        >
                    {progress}%
                </div>
            </div>
        </>

    )
}

export default ProgressBar