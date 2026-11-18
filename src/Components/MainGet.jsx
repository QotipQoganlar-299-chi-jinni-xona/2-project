import React from 'react'
import img1 from "../assets/0b877e3e01526262e55ad8fc6a929f3cd7113aeb.jpg"
import img2 from '../assets/5e0f4e5010ef06d5c1b897b806c3e22877dafd33.jpg'
import img3 from '../assets/7db8200d2737aee3b01e59844b45c665b24ad107.jpg'
import img4 from "../assets/076c99fb5e62d4e00a26dc49d86263f58a626591.jpg"
const MainGet = () => {
    return (
        <div className='pt-[70px]'>
            <div className='max-w-full w-[85%] mx-auto'>
                <div>
                    <p className='text-[40px] font-bold'>Get to know iPhone.</p>
                </div>
                <div>
                    <div className="carousel rounded-box">
                        <div className="carousel-item relative">
                            <p className='absolute pl-[40px] pt-[40px] text-white text-[15px]'>Apple Intelligence</p>
                            <p className='absolute  pl-[40px] pt-[60px] text-white text-[30px]'>AI‑opening</p>
                            <p className='absolute  pl-[40px] pt-[100px] text-white text-[30px]'>possibilities.</p>
                            <img
                                src={img1}
                                alt="Burger" />
                        </div>
                        <div className="carousel-item relative">
                            <img src={img3} alt="" />

                            <div className="absolute top-10 left-10 text-white">
                                <p className="text-[15px]">Cutting-Edge Cameras</p>
                                <p className="text-[30px]">Picture your best</p>
                                <p className="text-[30px]">photos and videos.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative">
                            <p className='absolute pl-[40px] pt-[40px] text-white text-[15px]'>Chip and Battery Life</p>
                            <p className='absolute  pl-[40px] pt-[60px] text-white text-[30px]'>Fast that lasts.</p>
                            <img
                                src={img2}
                                alt="Burger" />
                        </div>
                        <div className="carousel-item relative">
                            <p className='absolute pl-[40px] pt-[40px] text-white text-[15px]'>Innovation</p>
                            <p className='absolute  pl-[40px] pt-[60px] text-white text-[30px]'>Beautiful and durable,</p>
                            <p className='absolute  pl-[40px] pt-[100px] text-white text-[30px]'>by design.</p>
                            <img
                                src={img4}
                                alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                alt="Burger" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainGet