import React from 'react'

const AkromM3 = () => {
  return (
    <div  className='w-[85%] max-w-[100%] mx-auto '>
        
            <section class="w-full bg-[#f5f5f7] py-10 px-8 overflow-hidden">


                <div class="flex justify-between items-center mb-14">
                    <h1 class="text-4xl font-bold tracking-tight text-[#1d1d1f]">
                        Explore the lineup.
                    </h1>

                    <a href="#" class="text-blue-600 text-sm hover:underline whitespace-nowrap">
                        Compare all models
                    </a>
                </div>


                <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">


                    <div class="flex flex-col items-center group cursor-pointer">
                        <div class="h-[230px] w-full flex items-center justify-center">

                        </div>

                        <div class="flex gap-1.5 mt-7 mb-5">
                            <span class="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#333]"></span>
                        </div>

                        <h2 class="text-xl font-bold text-[#1d1d1f]">iPad Pro</h2>
                    </div>


                    <div class="flex flex-col items-center group cursor-pointer">
                        <div class="h-[230px] w-full flex items-center justify-center">

                        </div>

                        <div class="flex gap-1.5 mt-7 mb-5">
                            <span class="w-2.5 h-2.5 rounded-full bg-[#e4dfd5] border border-gray-300"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#c4dfe0] border border-gray-300"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#e8dce8] border border-gray-300"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#666]"></span>
                        </div>

                        <h2 class="text-xl font-bold text-[#1d1d1f]">iPad Air</h2>
                    </div>

                    <div class="flex flex-col items-center group cursor-pointer">
                        <div class="h-[230px] w-full flex items-center justify-center">

                        </div>

                        <div class="flex gap-1.5 mt-7 mb-5">
                            <span class="w-2.5 h-2.5 rounded-full bg-[#ddd] border border-gray-300"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#6889b2]"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#e65d72]"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-[#f4d34f]"></span>
                        </div>

                        <h2 class="text-xl font-bold text-[#1d1d1f]">iPad</h2>
                    </div>

                </div>

            </section>
    </div>
  )
}

export default AkromM3