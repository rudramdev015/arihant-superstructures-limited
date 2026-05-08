import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

const YT_DESKTOP = 'lIBxyEhoalc';
const YT_MOBILE  = 'GVS07TkRI8A';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef       = useRef(null);
  const iframeMobileRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(t);
  }, []);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    const cmd = nextMuted
      ? '{"event":"command","func":"mute","args":""}'
      : '{"event":"command","func":"unMute","args":""}';
    const volCmd = nextMuted
      ? '{"event":"command","func":"setVolume","args":[0]}'
      : '{"event":"command","func":"setVolume","args":[100]}';

    const isMobile = window.innerWidth < 640;
    const target   = isMobile ? iframeMobileRef.current : iframeRef.current;
    if (target?.contentWindow) {
      target.contentWindow.postMessage(cmd, '*');
      target.contentWindow.postMessage(volCmd, '*');
    }
  };

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
            MOBILE  (< 640 px)
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

        {/* ══ SOUND TOGGLE BUTTON ══ */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-5 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-5 py-3 rounded-full text-[11px] font-black tracking-[0.2em] uppercase border border-white/25 hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 active:scale-95 shadow-xl"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <>
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
              Sound On
            </>
          ) : (
            <>
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
              Mute
            </>
          )}
        </button>

      </header>

      <style>{`
        /*
          Cover formula:
            Portrait  390×844: width = max(390, 177.78×8.44) = 1500px
            Landscape 1440×900: width = max(1440, 177.78×9) = 1600px
          Video always fills the viewport, center visible, edges clipped.
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
