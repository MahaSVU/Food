import logoImage from '../assets/image2.png';
import figmaIcon from '../assets/image3.png';
import backgroundImage from '../assets/image1.png';

const features = [
    'Fully Customizable',
    'Free Google Font',
    'Global Guidestyle',
    '40 User App Screen',
    '10+ Chef App Screens',
    '50+ iOS Screens',
];

function HeroComponent() {
    return (
        <section
            className="w-full min-h-screen bg-no-repeat relative flex items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'right center',
                backgroundSize: 'auto 100%',
            }}
        >

            <div className="absolute inset-0 bg-[#f5b86a]/90 lg:hidden" />

            <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    <div className="max-w-xl space-y-6 sm:space-y-8 text-center lg:text-left">

                        <img
                            src={logoImage}
                            alt="Food Logo"
                            className="w-24 sm:w-28 mx-auto lg:mx-0"
                        />

                        <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-extrabold leading-[1.1] text-black">
                            Food Delivery <br className="hidden sm:block" />
                            iOS UI Kit
                        </h1>

                        <ul className="space-y-3 sm:space-y-4">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex justify-center lg:justify-start items-center gap-3 text-sm sm:text-base md:text-lg font-medium text-black/80"
                                >
                                    <span className="text-[#ff6a2d] text-lg font-bold">→</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-center lg:justify-start">
                            <button className="flex items-center gap-3 bg-[#ffb357] px-5 sm:px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
                                <span className="text-sm sm:text-base font-semibold text-black">
                                    Compatible With
                                </span>
                                <img
                                    src={figmaIcon}
                                    alt="Figma"
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block" />

                </div>
            </div>
        </section>
    );
}

export default HeroComponent;