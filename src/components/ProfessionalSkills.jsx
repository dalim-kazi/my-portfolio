
import React from 'react';

const ProfessionalSkills = () => {
    return (
        <div>
            <h1 className='text-2xl text-white font-bold mb-14 text-center'>Professional Skills</h1>
            <div className='grid grid-cols-2 items-center justify-items-center'>
                <div className='mb-10'>
                <div className="radial-progress text-[#2ecc71] mb-2" style={{ 
                 "--value": 80 }} role="progressbar"><span 
                   className='text-white font-semibold'>80%</span></div>
                    <p className='text-white font-semibold'>Team Work</p>
               </div>
               <div className='mb-10 items-center'>
                <div className="radial-progress text-[#2ecc71] mb-2" style={{ 
                 "--value": 70 }} role="progressbar"><span 
                   className='text-white'>50%</span></div>
                    <p className='text-white font-semibold'>My Creativity</p>
                </div>
                <div className='mb-10 items-center'>
                <div className="radial-progress text-[#2ecc71] mb-2" style={{ 
                 "--value": 70 }} role="progressbar"><span 
                   className='text-white font-semibold'>70%</span></div>
                    <p className='text-white font-semibold'>Projects <br /> Management</p>
                </div>
                <div className='mb-10 items-center'>
                <div className="radial-progress text-[#2ecc71] mb-2" style={{ 
                 "--value": 60 }} role="progressbar"><span 
                   className='text-white font-semibold'>60%</span></div>
                    <p className='text-white font-semibold'>Communication</p>
               </div>
            </div>
        </div>
    );
};

export default ProfessionalSkills;  