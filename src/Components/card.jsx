import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const Card = ({ headline, content }) => {   
    return (  
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">  
            <div className="text-2xl text-[#4F9451]">  
                <FontAwesomeIcon icon={faLock} />  
            </div>  
            <h3 className="mt-4 text-xl font-semibold">{headline}</h3>  
            <p className="mt-2 text-gray-600">{content}</p>  
            <a href="/" className="mt-4 inline-flex items-center text-[#4F9451]" >  
                <span>Learn more</span>  
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />  
            </a>  
        </div>  
    );  
};  

export default Card;