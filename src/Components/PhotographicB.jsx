import React from 'react'

const PhotographicB = () => {
    return (
        <div className='max-[100%] w-[85%] mx-auto'>
            <div className=' py-[25px]'>
                <div className=' text-teal-700 '>
                    <h1>Choose your
                        Photographic Style.</h1>
                    <h1>Change it up.
                        Change it back.</h1>
                </div>

                <div className='flex justify-center flex-wrap py-[15px]'>
                    <img className='py-[10px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwZiDhdVSPSO_SuDW4-GswbZP1cx1MKz5CQFe1QErjuxSoGGQm2UmeKU&s=10" alt="" />
                    <img className='py-[10px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwZiDhdVSPSO_SuDW4-GswbZP1cx1MKz5CQFe1QErjuxSoGGQm2UmeKU&s=10" alt="" />
                    <img className='py-[10px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwZiDhdVSPSO_SuDW4-GswbZP1cx1MKz5CQFe1QErjuxSoGGQm2UmeKU&s=10" alt="" />
                </div>
                <div className="py-10 px-5 text-center">

                    <p className="max-w-[500px] mx-auto text-gray-500 text-sm font-semibold">
                        Our latest generation of Photographic Styles gives you greater
                        creative flexibility than ever before, so you can
                        <span className="text-black"> make every photo even more you.</span>
                        And you can add, change, or remove a style anytime you want.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default PhotographicB