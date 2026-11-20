import React from 'react'
import img1 from "../assets/4081bfebcfa923aea16aa18cbbec5c22ef202fe1.png"
import img2 from "../assets/8d8b303a6ed4a114da351e5a9edae42fd17085ac.png"
import img3 from "../assets/a91250c0e2f6dcbfd0fd8464d305baf3adae49c9.png"
import img4 from "../assets/07f2ec0eee2196d46042bd6fbeeb8199f87e5fe5.png"
const MainLineup = () => {
    return (
        <div className='pt-[100px]'>
            <div className='max-w-full w-[85%] mx-auto'>
                <div>
                    <p className='text-[50px] font-bold'>Explore the lineup.</p>
                </div>
                <div>
                    <div className="carousel flex gap-[100px] rounded-box">
                        <div className="carousel-item flex justify-center flex-col">
                            <img className='w-[350px]'
                                src={img1}
                                alt="Burger" />
                            <div className='pt-[30px]'>
                                <p className='text-[30px] font-bold'>iPhone 16</p>
                                <p>A total powerhouse.</p>

                            </div>
                            <div className='pt-[100px] flex gap-[20px] items-center'>
                                <button class="btn btn-primary">Learn more</button>
                                <p className='text-blue-300'>View pricing</p>
                            </div>
                        </div>
                        <div className="carousel-item flex justify-center flex-col">
                            <img className='w-[350px] h-[450px]'
                                src={img2}
                                alt="Burger" />
                            <div className='pt-[30px]'>
                                <p className='text-[30px] font-bold'>iPhone 15</p>
                                <p>A total powerhouse.</p>
                            </div>
                            <div className='pt-[100px] flex gap-[20px] items-center'>
                                <button class="btn btn-primary">Learn more</button>
                                 <p className='text-blue-300'>View pricing</p>
                            </div>
                        </div>
                        <div className="carousel-item flex justify-center flex-col">
                            <img className='w-[350px] h-[450px]'
                                src={img3}
                                alt="Burger" />
                            <div className='pt-[30px]'>
                                <p className='text-[30px] font-bold'>iPhone 14</p>
                                <p>A total powerhouse.</p>
                            </div>
                            <div className='pt-[100px] flex gap-[20px] items-center'>
                                <button class="btn btn-primary">Learn more</button>
                                 <p className='text-blue-300'>View pricing</p>
                            </div>
                        </div>
                        <div className="carousel-item flex justify-center flex-col">
                            <img className='w-[350px] h-[450px]'
                                src={img4}
                                alt="Burger" />
                                <div className='pt-[30px]'>
                                    <p className='text-[30px] font-bold'>iPhone SE</p>
                                </div>
                                <div className='pt-[100px] flex gap-[20px] items-center'>
                                    <button class="btn btn-primary">Learn more</button>
                                     <p className='text-blue-300'>View pricing</p>
                                </div>
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

export default MainLineup