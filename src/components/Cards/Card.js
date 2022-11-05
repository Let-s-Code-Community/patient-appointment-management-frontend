import React from 'react';
import pressure from '../../assets/pressure.jpg';
import clock from '../../assets/clock.jpg';
import patient from '../../assets/patient.jpg';
import { SlCalender } from 'react-icons/sl';
import { FiClock } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

const Card = () => {
    return (
        <div>

            <div className='flex flex-row justify-center  space-x-4'>
                <div className="card w-96 bg-base-100 shadow-xl content-center ">
                    <figure><img src={pressure} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex space-x-2 pl-2'><SlCalender /> 20th november,2020</div>
                        <div className='flex space-x-4 pl-2 '><FiClock /> 5 min read</div>


                        <h2 className="card-title">
                            You can easily connect to a doctor and make a treatment

                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          
                            <Link to="/departments" className="text-indigo-400 flex items-center ">
                                <div className=''>Read More</div>

                                <IconContext.Provider value={{ className: " text-md  rounded mx-2" }}>
                                    <div className=" rounded-md my-4 text-lg ">
                                        <BsArrowRight />
                                    </div>
                                </IconContext.Provider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={patient} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex space-x-2 pl-2'><SlCalender /> 20th november,2020</div>
                        <div className='flex space-x-4 pl-2 '><FiClock /> 5 min read</div>
                        <h2 className="card-title">

                            Lockdowns lead to fewer people seeking medical care
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link to="/departments" className="text-indigo-400 flex items-center ">
                                <div className=''>Read More</div>

                                <IconContext.Provider value={{ className: " text-md  rounded mx-2" }}>
                                    <div className=" rounded-md my-4 text-lg ">
                                        <BsArrowRight />
                                    </div>
                                </IconContext.Provider>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={clock} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex space-x-2 pl-2'><SlCalender /> 20th november,2020</div>
                        <div className='flex space-x-4 pl-2 '><FiClock /> 5 min read</div>
                        <h2 className="card-title">
                            Emergency medicine research course for the doctors
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link to="/departments" className="text-indigo-400 flex items-center ">
                                <div className=''>Read More</div>

                                <IconContext.Provider value={{ className: " text-md  rounded mx-2" }}>
                                    <div className=" rounded-md my-4 text-lg ">
                                        <BsArrowRight />
                                    </div>
                                </IconContext.Provider>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;