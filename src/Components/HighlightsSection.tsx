import React from 'react';
import { Layers, Type, LayoutGrid, Smartphone, Maximize, Palette } from 'lucide-react';

interface HighlightFeature {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    shadowColor: string;
    iconColor: string; // أضفنا لون الأيقونة المنفصل
}

const highlightsData: HighlightFeature[] = [
    {
        id: 1,
        icon: <Layers size={42} strokeWidth={2} />,
        title: 'Well Organized layer & Elements',
        description: 'Easily find any component within Figma layers.',
        shadowColor: 'rgba(168, 85, 247, 0.4)',
        iconColor: '#a855f7',
    },
    {
        id: 2,
        icon: <Type size={42} strokeWidth={2} />,
        title: 'Send Font Family Used',
        description: 'Montserrat Google Font Family.',
        shadowColor: 'rgba(59, 130, 246, 0.4)',
        iconColor: '#3b82f6',
    },
    {
        id: 3,
        icon: <LayoutGrid size={42} strokeWidth={2} />,
        title: 'Global Guidestyle',
        description: 'Quickly change color...',
        shadowColor: 'rgba(249, 115, 22, 0.4)',
        iconColor: '#f97316',
    },
    {
        id: 4,
        icon: <Smartphone size={42} strokeWidth={2} />,
        title: '50+ Clean UI Crafted screens',
        description: 'Pre-made components...',
        shadowColor: 'rgba(34, 197, 94, 0.4)',
        iconColor: '#22c55e',
    },
    {
        id: 5,
        icon: <Maximize size={42} strokeWidth={2} />,
        title: 'Responsive Resizing Screens',
        description: 'Quickly resize...',
        shadowColor: 'rgba(236, 72, 153, 0.4)',
        iconColor: '#ec4899',
    },
    {
        id: 6,
        icon: <Palette size={42} strokeWidth={2} />,
        title: 'Trendy Design & Colors',
        description: 'Clean design...',
        shadowColor: 'rgba(255, 0, 255, 0.4)',
        iconColor: '#ff00ff',
    },
];

const HighlightCard: React.FC<{ feature: HighlightFeature }> = ({ feature }) => {
    return (
        <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center shadow-sm border border-gray-50 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl w-full h-full justify-center">

            <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform"
                style={{
                    backgroundColor: feature.iconColor,
                    boxShadow: `0 15px 35px -5px ${feature.shadowColor}`,
                    color: 'white'
                }}
            >
                {feature.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tighter leading-tight max-w-[180px]">
                {feature.title}
            </h3>
        </div>
    );
};

const HighlightsSection: React.FC = () => {
    return (
        <section className="w-full min-h-screen lg:h-screen bg-[#f8f9fa] flex flex-col items-center justify-center py-12 px-6">

            <div className="text-center mb-10 md:mb-14">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tighter">
                    Highlights
                </h2>
            </div>

            {/* Grid Container */}
            <div className="container mx-auto max-w-7xl h-full lg:max-h-[70vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-full">
                    {highlightsData.map((feature) => (
                        <HighlightCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;