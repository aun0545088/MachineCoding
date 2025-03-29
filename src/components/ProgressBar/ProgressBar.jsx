import React, { useEffect, useState } from 'react'
import './style.css'

const ProgressBar = ({ progress }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setAnimatedProgress(progress), 200)

        return () => clearTimeout(timer)
    }, [progress])
    return (
        <>
            <div className='outer'>
                <div className='inner'
                    style={{
                        // width: `${progress}%`, 
                        transform: `translateX(${animatedProgress - 100}%)`,
                        color: animatedProgress < 5 ? "black" : "white"
                    }}
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