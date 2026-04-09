import React from 'react';

import screen1 from '../assets/image4.png';
import screen2 from '../assets/image5.png';
import screen3 from '../assets/image6.png';
import screen4 from '../assets/image7.png';

interface ScreenGroup {
    id: number;
    mainScreens: string[];
    offsetScreen?: string;
}

const screensData: ScreenGroup[] = [
    {
        id: 1,
        mainScreens: [screen1, screen2],
    },
    {
        id: 2,
        mainScreens: [screen3, screen4],
    },
];

const MobileScreen: React.FC<{ imageUrl: string; isOffset?: boolean }> = ({
    imageUrl,
    isOffset,
}) => {
    return (
        <div
            className={`bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] md:border-[10px] border-white transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${isOffset
                ? 'absolute -right-8 top-12 md:-right-12 md:top-16 z-20 w-[45%] md:w-[50%]'
                : 'relative z-10 w-full'
                }`}
        >
            <img
                src={imageUrl}
                alt="Food App Screen"
                className="w-full h-auto object-contain"
            />
        </div>
    );
};

const UserScreensSection: React.FC = () => {
    return (
        /* - w-full: العرض 100% دائماً.
           - h-auto: الطول تلقائي في الموبايل والتابلت (لحل مشكلة اختفاء نصف الكرت).
           - lg:h-screen: في الديسكتوب (1024px+) نثبته على 100vh.
           - lg:overflow-hidden: نمنع السكرول فقط في الديسكتوب.
        */
        <section className="w-full h-auto lg:h-screen bg-[#f8f9fa] py-16 lg:py-0 flex flex-col justify-center items-center lg:overflow-hidden">

            {/* العنوان - flex-none تضمن ثبات حجمه في الديسكتوب */}
            <div className="text-center mb-10 lg:mb-8 px-6 max-w-2xl flex-none">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-tight mb-3">
                    User App Screens
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-medium tracking-tight">
                    40 Mobile Crafted Screens for iPhone 11 Pro
                </p>
            </div>

            {/* الحاوية الرئيسية:
          - lg:flex-1: في الديسكتوب تأخذ المساحة المتبقية من الـ 100vh.
          - lg:max-w-full: نضمن أن العرض 100% كما طلبت.
      */}
            <div className="w-full lg:max-w-full px-4 md:px-10 lg:px-20 lg:flex-1 flex items-center justify-center min-h-0">

                {/* Grid: 
            - lg:h-[80vh]: نحدد طول الشبكة في الديسكتوب ليكون 80% من الشاشة لترك مسافة للعنوان والوصف.
        */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full h-full lg:max-h-[75vh] items-stretch">

                    {screensData.map((group) => (
                        <div
                            key={group.id}
                            /* - min-h-[400px]: لضمان شكل المربع في الموبايل.
                               - lg:min-h-0: في الديسكتوب نترك الـ Flexbox يتحكم بالطول.
                            */
                            className="bg-[#e9ecef] rounded-[2.5rem] md:rounded-[4rem] p-8 lg:p-12 w-full flex items-center justify-center relative overflow-hidden shadow-inner h-full min-h-[450px] lg:min-h-0"
                        >
                            {/* الصور:
                  - max-w-[80%]: لضمان أن الصور لن تلمس حواف المربع الرمادي أبداً في أي مقاس.
              */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 relative w-full max-w-[240px] sm:max-w-[380px] lg:max-w-[80%] mx-auto transition-transform duration-500 hover:scale-[1.03]">

                                {group.mainScreens.map((url, index) => (
                                    <div
                                        key={index}
                                        className="w-full sm:flex-1 shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] bg-white overflow-hidden"
                                    >
                                        <MobileScreen imageUrl={url} />
                                    </div>
                                ))}

                                {/* تظهر فقط في الشاشات العريضة جداً */}
                                {group.offsetScreen && (
                                    <div className="hidden xl:block">
                                        <MobileScreen imageUrl={group.offsetScreen} isOffset />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default UserScreensSection;
