import React from 'react';

interface AppScreensProps {
    title: string;
    subtitle: string;
    images: string[];
    startStaggeredFrom?: number;
}

const UserAppScreensSection: React.FC<AppScreensProps> = ({
    title,
    subtitle,
    images,
    startStaggeredFrom = 13
}) => {
    return (
        <section className="w-full h-auto bg-white py-20 md:py-32 flex flex-col items-center overflow-hidden">
            <div className="text-center mb-16 md:mb-24 px-6 max-w-3xl flex-none">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-950 tracking-tighter leading-[1.1] mb-6">
                    {title}
                </h2>
                <p className="text-lg md:text-2xl text-gray-500 font-medium tracking-tight">
                    {subtitle}
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 w-full">
                <div className="bg-[#e9ecef] rounded-[3rem] md:rounded-[5rem] p-8 md:p-16 lg:p-24 shadow-inner">

                    {/* التعديل الجوهري هنا: استبدلنا grid بـ flex مع justify-center */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-x-12 lg:gap-x-16 gap-y-12 items-start">
                        {images.map((imgUrl, index) => {
                            const currentId = index + 1;
                            const isStaggered = currentId >= startStaggeredFrom;

                            // بما أننا نوزع العناصر كـ Flex، نحتاج لتحديد عرض العناصر 
                            // لنحاكي وجود 4 أعمدة في الشاشات الكبيرة (xl)
                            const isOffsetColumn = (index % 4 === 1 || index % 4 === 3);

                            return (
                                <div
                                    key={index}
                                    className={`w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-3rem)] xl:w-[calc(25%-4rem)] max-w-[280px] group transition-all duration-500
                                        ${isStaggered && isOffsetColumn ? 'xl:mt-24' : 'xl:mt-0'} 
                                        ${isStaggered && index % 2 !== 0 ? 'sm:mt-12 xl:mt-0' : 'sm:mt-0'}
                                    `}
                                >
                                    <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden border-[8px] lg:border-[12px] border-white transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-4">
                                        <img
                                            src={imgUrl}
                                            alt="App Screen"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserAppScreensSection;