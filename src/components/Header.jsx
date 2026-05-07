import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

const YT_DESKTOP = 'lIBxyEhoalc';
const YT_MOBILE  = 'k9fZIlVDxSI';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef       = useRef(null);
  const iframeMobileRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      {/* Full-screen header — uses dvh for iPhone address-bar awareness */}
      <header
        id="Header"
        className="relative w-full bg-[#050505] overflow-hidden"
        style={{ height: '100dvh' }}
      >

        {/* ══════════════════════════════════════════════
            MOBILE  (< 640 px  /  sm breakpoint)
            Cover formula: fills the full iPhone screen.
            Video is centered; left/right edges are clipped.
        ══════════════════════════════════════════════ */}
        <div className="sm:hidden absolute inset-0 overflow-hidden">
          <iframe
            ref={iframeMobileRef}
            src={`https://www.youtube.com/embed/${YT_MOBILE}?autoplay=1&mute=1&loop=1&playlist=${YT_MOBILE}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=1`}
            className="yt-mobile-iframe"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Arihant Anchal"
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        </div>

        {/* ══════════════════════════════════════════════
            DESKTOP  (≥ 640 px)
            Same cover formula for landscape viewports.
        ══════════════════════════════════════════════ */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${YT_DESKTOP}?autoplay=1&mute=1&loop=1&playlist=${YT_DESKTOP}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=1`}
            className="yt-desktop-iframe"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Arihant Anchal"
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        </div>

      </header>

      <style>{`
        /*
          Cover formula explained:
            Portrait  390×844: width = max(390, 177.78×8.44) = max(390, 1500) = 1500px
                               height = max(844, 56.25×3.90) = max(844, 219)  = 844px  ✓
            Landscape 1440×900: width = max(1440, 177.78×9) = max(1440, 1600) = 1600px
                                height = max(900, 56.25×14.4) = max(900, 810)  = 900px  ✓
          Result: video always fills the viewport, center visible, edges clipped.
        */

        .yt-mobile-iframe,
        .yt-desktop-iframe {
          position: absolute;
          width:  max(100vw, 177.78vh);
          height: max(100vh, 56.25vw);
          top:  50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default Header;
