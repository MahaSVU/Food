
import './App.css'
import HeroComponent from './Components/HeroComponent';
import HighlightsSection from './Components/HighlightsSection';
import UserScreensSection from './Components/UserScreensSection';
import UserAppScreensSection from './Components/UserAppScreensSection';

import screen1 from './assets/image8.png';
import screen2 from './assets/image9.png';
import screen3 from './assets/image11.png';
import screen4 from './assets/image11.png';
import screen5 from './assets/image12.png';
import screen6 from './assets/image13.png';
import screen7 from './assets/image14.png';
import screen8 from './assets/image15.png';
import screen9 from './assets/image16.png';
import screen10 from './assets/image17.png';
import screen11 from './assets/image18.png';
import screen12 from './assets/image19.png';

import screen13 from './assets/image4.png';
import screen14 from './assets/image5.png';
import screen15 from './assets/image6.png';
import screen16 from './assets/image7.png';
import screen17 from './assets/image24.png';
import screen18 from './assets/image25.png';
import screen19 from './assets/image26.png';
import screen20 from './assets/image27.png';
import screen21 from './assets/image28.png';
import screen22 from './assets/image29.png';
import screen23 from './assets/image30.png';
import screen24 from './assets/image31.png';
import screen25 from './assets/image32.png';
import screen26 from './assets/image33.png';
import screen27 from './assets/image34.png';
import screen28 from './assets/image35.png';
import screen29 from './assets/image36.png';
import screen30 from './assets/image37.png';
import screen31 from './assets/image38.png';
import screen32 from './assets/image39.png';
import screen33 from './assets/image40.png';
import screen34 from './assets/image41.png';
import screen35 from './assets/image42.png';
import screen36 from './assets/image43.png';
import screen37 from './assets/image44.png';
import screen38 from './assets/image45.png';
import screen39 from './assets/image46.png';
import screen40 from './assets/image47.png';
import screen41 from './assets/image48.png';
import screen42 from './assets/image49.png';
import screen43 from './assets/image50.png';
import screen44 from './assets/image51.png';
import screen45 from './assets/image52.png';
import screen46 from './assets/image53.png';
import screen47 from './assets/image54.png';
import screen48 from './assets/image55.png';

const allImages = [
  screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10,
  screen11, screen12, screen13, screen14, screen15, screen16, screen17, screen18, screen19, screen20,
  screen21, screen22, screen23, screen24, screen25, screen26, screen27, screen28, screen29, screen30,
  screen31, screen32, screen33, screen34, screen35, screen36, screen37, screen38
];

const chefImages = [
  screen39, screen40, screen41, screen42, screen43,
  screen44, screen45, screen46, screen47, screen48
];

function App() {
  return (
    <>
      <main className="min-h-screen">
        <HeroComponent />
        <HighlightsSection />
        <UserAppScreensSection
          title="User App Screens"
          subtitle="40 Mobile Crafted Screens for iPhone 11 Pro"
          images={allImages}
          startStaggeredFrom={13}
        />
        <UserAppScreensSection
          title="Chef App Screens"
          subtitle="10 Mobile Crafted Screens for iPhone 11 Pro"
          images={chefImages}
          startStaggeredFrom={8}
        />
      </main>
    </>
  )
}

export default App
