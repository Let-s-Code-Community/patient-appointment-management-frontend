/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header '>
                <div className='container mx-auto'>
                    <div className='p-8'>
                        <div className='container mx-auto px-8'>
                            <div className='heading-title' >
                                <img  src="https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png" width={50} alt="" />
                                <div className=' mt-8'>
                                    <h1 className='md:text-6xl text-3xl text-white font-bold mb-12'>Meet The <br />  Best Doctor</h1>
                                    <p className='mt-5 text-gray-300 mb-10'>Great doctor if you need your family member to <br /> get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                    <div className='mt-4 pt-2'>
                                        <a href="#" className='btn btn-primary text-white'>Make Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-24 md:p-24 relative '>
                <div className='container mx-auto'>
                    <div className=''>
                        <div className='container mx-auto px-4 ' >
                            <div className='md:flex justify-center container mx-auto px-4  relative -mt-52 '>
                                <div className='md:w-96 bg-slate-100 md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  rounded-tl-lg rounded-tr-lg'>
                                    <div className='p-6'>
                                        <i class="bi bi-heart-pulse-fill text-4xl text-primary"></i>
                                        <h4 className='mt-3 md:text-xl text-lg font-bold'>Emergency Cases</h4>
                                        <p className='text-muted mt-3 mb-3'>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                        <a href="#" className='text-blue-600/100'>Read more  <i class="bi bi-arrow-right-short text-lg "></i></a>
                                    </div>
                                </div>
                                <div className='md:w-96 px-0 bg-white'>
                                    <div className='p-6'>
                                        <i class="bi bi-calendar2-plus-fill text-4xl text-primary"></i>
                                        <h4 className='mt-3 md:text-xl text-lg font-bold'>Doctor Timetable</h4>
                                        <p className='text-muted mt-3 mb-3 '>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                        <a href="#" className='text-blue-600/100'>Read more  <i class="bi bi-arrow-right-short text-lg "></i></a>

                                    </div>
                                </div>
                                <div className='md:w-96 bg-slate-100 md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none rounded-bl-lg rounded-br-lg'>
                                    <div className=' p-6'>
                                        <i class="bi bi-clock-fill text-4xl text-primary"></i>
                                        <h4 className='mt-3 md:text-xl text-lg font-bold'>Opening Hours</h4>
                                        <ul className='list-none  p-4'>
                                            <li className='flex space-x-36'>
                                                <p className=''>Monday</p>
                                                <p className='whitespace-nowrap text-blue-600/100'>8:00-20:00</p>
                                            </li>
                                            <li className='flex space-x-36 '>
                                                <p className=''>Saturday</p>
                                                <p className='whitespace-nowrap text-blue-600/100'>8:00-20:00</p>
                                            </li>
                                            <li className='flex space-x-36 '>
                                                <p className=''>Sunday</p>
                                                <p className='whitespace-nowrap text-blue-600/100'>8:00-20:00</p>
                                            </li>
                                            
                                           
                                        </ul>
                                        <a href="#" className='text-blue-600/100'>Read more  <i class="bi bi-arrow-right-short text-lg "></i></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;