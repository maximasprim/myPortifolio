import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import img10 from '../assets/receiving certificate.jpg';
// import img2 from '../assets/image 2.jpg';
import img3 from '../assets/image 3.jpg';
import img4 from '../assets/image 4.jpg';
import img5 from '../assets/image 5.jpg';
import img6 from '../assets/image 6.jpg';
import img7 from '../assets/image 7.jpg';
import img8 from '../assets/image 6.jpg';
import img9 from '../assets/image 1.jpg';

const Home = () => {
    return (
        <section className='md:px-10 px-7 my-10 md:h-full bg-[#1a1a29] mb-20' id='home'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {/* text */}
                <div className='text-white'>
                    <h6 className='text-3xl mt-12'>Hello There, I'm</h6>
                    <h1 className='font-semibold md:text-5xl my-4 text-3xl text-green-500'>
                        <Typewriter
                            words={['Michael Maxwel Mwasame']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={100}
                            delaySpeed={1500}
                        />
                    </h1>
                    <div className='md:w-96 flex'>
                        <p className='text-yellow-400'>Fullstack Developer,</p>
                        <p className='text-blue-400'>Cybersecurity Analyst,</p>
                        <p className='text-red-400'>Computer Scientist.</p>
                    </div>
                    <div className='mt-5'>
                        <a href="https://drive.google.com/file/d/1oBLp63BgrjsugZ6lLtZ7uISqYzsN7Hx8/view?usp=sharing">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                {/* img */}
                <div className='order-first md:order-last relative rounded-lg shadow-xl overflow-hidden min-w-100px'>
                    <div className='image-carousel'>
                        <img src={img10} alt="Michael Maxwel" loading="lazy" />
                        <img src={img9} alt="Michael Maxwel" loading="lazy" />
                        <img src={img8} alt="Michael Maxwel" loading="lazy" />
                        <img src={img7} alt="Michael Maxwel" loading="lazy" />
                        <img src={img3} alt="Michael Maxwel" loading="lazy" />
                        <img src={img4} alt="Michael Maxwel" loading="lazy" />
                        <img src={img6} alt="Michael Maxwel" loading="lazy" />
                        <img src={img5} alt="Michael Maxwel" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
