import React from 'react';
import bannerImg from '../../../assets/banner-main.png'

const Banner = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      {/* ব্যানার কার্ড মূল কন্টেইনার */}
      <div className="bg-[#131313] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-[#131313] text-white rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-gray-800">
        
        {/* ব্যাকগ্রাউন্ড ইলুমিনেশন / লাইটিং ইফেক্ট */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* ক্রিকেট ব্যানার ইমেজ / আইকন সেকশন */}
        <div className="mb-6 relative z-10">
          <img 
            src={bannerImg}
            alt="Cricket Banner" 
            className="w-40 md:w-52 h-auto mx-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* টাইটেল ও সাবটাইটেল */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-wide max-w-2xl leading-tight relative z-10">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base mb-8 relative z-10 font-medium">
          Beyond Boundaries Beyond Limits
        </p>

        {/* ক্লাইম ফ্রি ক্রেডিট বাটন উইথ আউটার বর্ডার */}
        <div className="p-1 border border-[#E7FE29] rounded-2xl inline-block relative z-10">
          <button className="bg-[#E7FE29] hover:bg-[#d6ec22] text-black font-bold px-5 py-3 rounded-xl transition-all duration-300 shadow-md">
            Claim Free Credit
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
