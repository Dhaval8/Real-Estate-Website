import React from 'react';
import './contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const contact = () => {
  return (
    <section className='c-wrapper'>  
        <div className='paddings innerWidth flexCenter c-container'>
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We always ready to help by providing the best services to you . We believe a good place can make your life better. 
                    <div className='flexColStart contactModes'>
                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>988 18 359 36</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Call Now
                                </div>
                            </div>
                            
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>988 18 359 36</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Chat Now
                                </div>
                            </div>
                        </div>

                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>988 18 359 36</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Video Call Now
                                </div>
                            </div>
                            
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>988 18 359 36</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
                </span>

            </div>
            <div className='c-right'>
                <div className='image-container'>
                    <img src='/public/contact.jpg' />
                </div>
            </div>
        </div>
    </section>
  )
} 

export default contact;