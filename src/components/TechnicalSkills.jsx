import React from 'react';

const TechnicalSkills = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-white mb-5'>Technical Skills</h1>
            <div>
            <div className='md:w-4/6 mx-auto mb-10'>
            <div className='flex justify-between text-white font-semibold mb-2'>
                <p>HTML</p>
                <p>80%</p>
            </div>
            <progress className="progress bg-white progress-success h-4" value="80" max="100"></progress>        
                </div>
                <div className='md:w-4/6 mx-auto mb-10'>
            <div className='flex justify-between text-white font-semibold mb-2'>
                <p>CSS</p>
                <p>70%</p>
            </div>
            <progress className="progress bg-white progress-success h-4" value="70" max="100"></progress>        
                </div>
                <div className='md:w-4/6 mx-auto mb-10'>
            <div className='flex justify-between text-white font-semibold mb-2'>
                <p>Javascript</p>
                <p>60%</p>
            </div>
            <progress className="progress bg-white progress-success h-4" value="60" max="100"></progress>        
                </div>
                <div className='md:w-4/6 mx-auto mb-10'>
            <div className='flex justify-between text-white font-semibold mb-2'>
                <p>React</p>
                <p>80%</p>
            </div>
            <progress className="progress bg-white progress-success h-4" value="80" max="100"></progress>        
                </div>
                <div className='md:w-4/6 mx-auto mb-10'>
            <div className='flex justify-between text-white font-semibold mb-2'>
                <p>Node.js</p>
                <p>70%</p>
            </div>
            <progress className="progress bg-white progress-success h-4" value="70" max="100"></progress>        
                </div>
                <div className='md:w-4/6 mx-auto mb-10'>
            <div className='flex justify-between text-white font-semibold mb-2'>
                <p>Next.js</p>
                <p>30%</p>
            </div>
            <progress className="progress bg-white progress-success h-4" value="30" max="100"></progress>        
           </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;