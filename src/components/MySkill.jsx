import React from 'react';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';

const MySkill = () => {
    return (
      <>
        <h1 className='text-4xl text-center font-bold mb-20 mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>My Skills</h1>
        <div className='grid md:grid-cols-2 gap-5 mb-20'>
       <div>
        <TechnicalSkills/>
       </div>
      <div>
        <ProfessionalSkills/>
      </div>
     </div> 
        </>
    );
};

export default MySkill;