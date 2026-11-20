import React from "react";
import { IoMusicalNotes } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const MusicPlans = () => {
  return (
    <div className="bg-gray-100 text-black py-[60px]">
      <div className="container mx-auto w-[95%] max-w-[950px]">
        <div className="flex flex-col items-center text-center mb-[40px]">
          <div className="bg-rose-600 text-white p-[12px] rounded-[14px] mb-[16px]">
            <IoMusicalNotes className="text-[28px]" />
          </div>

          <h2 className="text-[32px] md:text-[50px] font-bold leading-tight mb-[12px]">
            Choose the plan <br /> that's right for you.
          </h2>

          <p className="text-[16px] font-semibold mb-[6px]">
            No commitment. Cancel anytime.
          </p>
          <p className="text-[12px] text-gray-500">
            Apple Music is available in iTunes, and for iOS and Android devices.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-300 text-black">
                <th className="w-[45%]"></th>
                <th className="text-center">
                  <p className="text-[14px] font-bold">Student</p>
                  <p className="text-[14px] mb-[8px]">$5.99/mo.</p>
                  <button className="btn btn-xs bg-rose-600 text-white border-none rounded-full">
                    Try it free
                  </button>
                </th>
                <th className="text-center">
                  <p className="text-[14px] font-bold">Individual</p>
                  <p className="text-[14px] mb-[8px]">$10.99/mo.</p>
                  <button className="btn btn-xs bg-rose-600 text-white border-none rounded-full">
                    Try it free*
                  </button>
                </th>
                <th className="text-center">
                  <p className="text-[14px] font-bold">Family</p>
                  <p className="text-[14px] mb-[8px]">$16.99/mo.</p>
                  <button className="btn btn-xs bg-rose-600 text-white border-none rounded-full">
                    Try it free
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300">
                <td>100 million songs and more than 30,000 expert-curated playlists</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Request any track, album, playlist, or station simply by asking Siri</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Free trial with no commitment</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Stream ad-free music</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Original shows, concerts, and exclusives</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Available on Apple devices</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>The Apple Music Classical app</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Available on other supported devices</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Spatial Audio with Dolby Atmos</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Full catalog in lossless audio</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Apple Music Sing, with beat-by-beat lyrics</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Download 100,000 songs to your library</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>See what your friends are listening to</td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Unlimited access for up to six people</td>
                <td></td>
                <td></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Personal music library for each family member</td>
                <td></td>
                <td></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>

              <tr className="border-b border-gray-300">
                <td>Personalized recommendations for each family member</td>
                <td></td>
                <td></td>
                <td className="text-center"><FaCheck className="inline" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MusicPlans;
