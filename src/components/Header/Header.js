/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header '>
                <div className='container'>
                    <div className='row container mx-auto'>
                        <div className='col-md-12 col-12 col-lg-12 '>
                            <div className='heading-title' >
                                <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png" width={50} alt="" />
                                <div className=' mt-3'>
                                    <h1 className='text-6xl text-white font-bold mb-4'>Meet The <br /> Best Doctor</h1>
                                    <p className='mt-5 text-gray-300 mb-0'>Great doctor if you need your family member to <br /> get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                    <div className='mt-4 pt-2'>
                                        <a href="#" className='btn btn-primary'>Make Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 px-0 relative border'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-10 col-12 col-md-10 col-lg-10 mx-auto' >
                            <div className='row container mx-auto  relative -mt-48'>
                                <div className='col-md-4 bg-neutral-100 rounded-tl-lg rounded-bl-lg'>
                                    <div className=' p-4 '>
                                        <i class="bi bi-heart-pulse-fill text-4xl text-primary"></i>
                                        <h4 className='mt-3 text-xl font-bold'>Emergency Cases</h4>
                                        <p className='text-muted mt-3 mb-3'>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                        <a href="#" className='text-primary'>Read more  <i class="bi bi-arrow-right-short text-lg "></i></a>
                                    </div>
                                </div>
                                <div className='col-md-4 px-0'>
                                    <div className=' p-4 bg-white'>
                                        <i class="bi bi-calendar2-plus-fill text-4xl text-primary"></i>
                                        <h4 className='mt-3 text-xl font-bold'>Doctor Timetable</h4>
                                        <p className='text-muted mt-3 mb-3'>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                        <a href="#" className='text-primary'>Read more  <i class="bi bi-arrow-right-short text-lg "></i></a>

                                    </div>
                                </div>
                                <div className='col-md-4  bg-neutral-100 rounded-tr-lg rounded-br-lg'>
                                    <div className='p-4'>
                                        <i class="bi bi-clock-fill text-4xl text-primary"></i>
                                        <h4 className='mt-3 text-xl font-bold'>Opening Hours</h4>
                                        <p className='text-muted mt-3 mb-3'>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                        <a href="#" className='text-primary'>Read more  <i class="bi bi-arrow-right-short text-lg "></i></a>

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