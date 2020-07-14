import React from 'react'
import logo from '../assets/images/drawers.jpg';
import avatar from '../assets/images/avatar-michelle.jpg';
import { FaFacebookSquare , FaTwitter , FaPinterest } from "react-icons/fa";
// import { FaShare } from "react-icons/fa";
import Tray from './PopupTray'


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
                            <div className="flex flex-col">
                                <h4 className="text-sm font-semibold text-dark-grayish-blue">Michelle Appleton</h4>
                                <h5 className="text-xs font-medium text-desaturated-dark-blue">{date}</h5>
                            </div>
                        </div>
                        <div id="share-icon" className='flex flex-col justify-center'>
                                <Tray className='inline mx-auto'>
                                    <div className="flex flex-row justify-between text-light-grayish-blue">
                                        <span className='uppercase text-xs'>
                                            S h a r e
                                        </span>
                                        <span>
                                            <button><FaFacebookSquare className='text-lg'/></button>
                                        </span>
                                        <span>
                                            <button><FaTwitter className='text-lg'/></button>
                                        </span>
                                        <span>
                                            <button><FaPinterest className='text-lg'/></button>
                                        </span>
                                    </div>
                                </Tray>
                        </div>
                </div>
            </div>
        </div>
    
    )
}

export default article
