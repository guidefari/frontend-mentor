import React from 'react'
import logo from '../assets/images/drawers.jpg';
import avatar from '../assets/images/avatar-michelle.jpg';
import share from '../assets/images/icon-share.svg';


let date = ('28 Jun, 2020')

const article = () => {
    return (
    
        <div id="card" className="flex flex-col md:flex-row md:max-w-3xl shadow-lg rounded-b-lg">
            <img src={logo} className="inline-block w-full md:w-4/12 h-48 md:h-64 mx-auto rounded-t-lg md:rounded-t-none md:rounded-l-lg" alt="logo" />
            <div className="text-wrapper bg-light-grayish-blue px-8 pt-8 pb-4 h-auto rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                <h3 className='text-base font-bold mb-4 text-dark-grayish-blue'>
                    Shift the overall look and feel by adding these wonderful 
                    touches to furniture in your home
                </h3>
                <p className="text-grayish-blue font-medium text-sm">
                    Ever been in a room and felt like something was missing? Perhaps 
                    it felt slightly bare and uninviting. I’ve got some simple tips 
                    to help you make any room feel complete.
                </p>
                <div id="share-container" className="flex flex-row mt-6 justify-between">
                        <div className='flex flex-row'>
                            <img className="w-10 h-10 rounded-full mr-5" src={avatar} alt=""/>
                            <span className="flex flex-col">
                                <h4 className="text-sm font-semibold text-dark-grayish-blue">Michelle Appleton</h4>
                                <h5 className="text-xs font-medium text-desaturated-dark-blue">{date}</h5>
                            </span>
                        </div>
                        <div id="share-icon" className='flex flex-col justify-center'>
                            <div className='flex flex-col justify-center rounded-full bg-grayish-blue w-8 h-8'>
                                <svg className='inline-block mx-auto' xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    
    )
}

export default article
