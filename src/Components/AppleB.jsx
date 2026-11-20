import React from 'react'

const AppleB = () => {
  return (
    <div className='max-[100%] w-[85%] mx-auto'>
      <div>
        <div className="bg-[#f5f5f7] py-16 px-6">
          <div className="w-[85%] max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] max-w-xl leading-tight">
                Why Apple is the best place to buy iPhone.
              </h2>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                Shop iPhone ›
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="text-3xl mb-4">🔄</div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                    Save with Apple Trade In.
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.*
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-lg">
                    +
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="text-3xl mb-4">💳</div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                    Pay over time, interest-free.
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    When you choose to check out with Apple Card Monthly Installments.
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-lg">
                    +
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="text-3xl mb-4">📡</div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                    Apple. Your one-stop shop for incredible carrier deals.
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get up to $800–$1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be required.
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-lg">
                    ›
                  </button>
                </div>
              </div>

            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                ‹
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center">
                ›
              </button>
            </div>

            <div className="flex justify-center mt-10">
              <button className="bg-gray-200/80 hover:bg-gray-300/80 text-[#1d1d1f] font-medium text-sm py-2.5 px-5 rounded-full flex items-center gap-3 transition">
                <span>Compare all iPhone models</span>
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                  ›
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AppleB