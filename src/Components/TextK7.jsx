import React from 'react'
import { SiApplearcade } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
const TextK7 = () => {
  return (
    <div>
  <div className="max-w-full w-[85%] mx-auto font-bold py-[50px] flex flex-col items-center gap-[50px] text-center text-[#1D1D1F] text-[20px] md:text-[41px] leading-[1.15] tracking-tight">
    
    <div className="w-full max-w-[780px]">
      <p>
        <span className="block text-[#FF4D45]">Unlimited access</span>
        to 200+ incredibly fun games,
        <br className="hidden sm:inline" /> with more added all the time.
      </p>
    </div>

    <div className="w-full max-w-[895px]">
      <p>
        <span className="block text-[#FF4D45]">Play across your Apple devices.</span>
        And get immersed on Apple Vision Pro.
      </p>
    </div>

    <div className="w-full max-w-[496px]">
      <p>
        <span className="block text-[#FF4D45]">No ads.</span>
        No interruptions.
        <br />
        No in-app purchases.
      </p>
    </div>

    <div className="w-full max-w-[850px]">
      <p>
        <span className="block text-[#FF4D45]">Online or offline,</span>
        games are always at your fingertips.
      </p>
    </div>

    <div className="w-full max-w-[780px]">
      <p>
        <span className="block text-[#FF4D45]">Share your subscription</span>
        with up to five family members.
      </p>
    </div>
    <div className="flex items-center justify-center gap-2 whitespace-nowrap text-[20px] md:text-[32px]">
        <span>Look for</span>
        <SiApplearcade className="shrink-0 text-[#00A8FF] text-4xl md:text-5xl" />
        <span>on</span>
        <FaAppStoreIos className="shrink-0 text-[#007AFF] text-4xl md:text-5xl" />
    </div>
    
  </div>

    <div className='flex justify-center items-center gap-[30px] py-[50px] flex-wrap'>
        <div className=" w-[326px]   ">
            <div className="card-body">
                <p className='card-title text-[15px] font-bold'>Free 1-month trial</p>
                <p className="card-title font-bold ">$6.99/mo.</p>
                <p className='text-[#666666] '>
                    After the free trial, get unlimited
                    access to 200+ games for the
                    price of one premium game
                    each month.
                </p>
                <div className=" card-actions">
                <button className="btn bg-[#FF4D45] text-amber-50 rounded-full ">Try it free1</button>
                </div>
            </div>
        </div>
        <div className=" w-[326px]   ">
            <div className="card-body">
                <p className='card-title text-[15px] font-bold'>Free 1-month trial</p>
                <p className="card-title font-bold ">Apple One</p>
                <p className='text-[#666666] '>
                    After the free trial, get unlimited
                    access to 200+ games for the
                    price of one premium game
                    each month.
                </p>
                <div className=" card-actions">
                <button className="btn bg-[#FF4D45] text-amber-50 rounded-full ">Try Apple One free2</button>
                </div>
            </div>
        </div>
        <div className=" w-[326px]   ">
            <div className="card-body">
                <p className='card-title text-[15px] font-bold'>Buy an Apple device</p>
                <p className="card-title font-bold ">3 months free.</p>
                <p className='text-[#666666] '>
                    After the free trial, get unlimited
                    access to 200+ games for the
                    price of one premium game
                    each month.
                </p>
                <div className=" card-actions">
                <button className="btn bg-[#FF4D45] text-amber-50 rounded-full ">Check eligibility</button>
                </div>
            </div>
        </div>
    </div>
    
    <div className='max-w-[100%] w-[85%] mx-auto'>
        <div className=' pb-[100px] flex flex-col gap-[30px]'>
            <p className='text-[55px] font-bold flex justify-center'>
                Action. Adventure. Puzzles.
                Let the gaming begin.
            </p>
            <p className='text-[20px]'>
                Apple Arcade gives you unlimited, uninterrupted access to the games you love. Brain-teasers,
                magical quests, endless runners, action-packed sports, beloved classics, and more — with amazing
                new releases and updates added all the time. It’s the most fun place on your phone, ready to enjoy
                whenever and wherever.
            </p>
        </div>
    </div>



</div>

  )
}

export default TextK7