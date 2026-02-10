
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const videoUrl = "https://www.dropbox.com/scl/fi/j28eqksc1o2wftgu5v7x0/depoimento-pronto-1.mp4?rlkey=ftcqpooktm82j126xvw8cwgba&st=8cl2rgoj&raw=1";
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [firstPlayDone, setFirstPlayDone] = useState(false);

  const testimonials = [
    { text: "Usei no almoço e já tive noção das calorias", author: "Marcos S." },
    { text: "Muito mais fácil do que pesquisar no Google", author: "Júlia F." },
    { text: "Abri, tirei a foto e pronto", author: "Ricardo M." },
  ];

  // Garantir que o autoplay funcione (alguns browsers exigem muted para autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay blocked by browser", error);
      });
    }
  }, []);

  const handleInteraction = () => {
    if (!videoRef.current) return;

    if (!firstPlayDone) {
      // Primeira interação: reinicia com áudio
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsMuted(false);
      setIsPlaying(true);
      setFirstPlayDone(true);
      setHasEnded(false);
    } else {
      // Interações subsequentes: toggle play/pause normal
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setHasEnded(false);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setHasEnded(false);
    }
  };

  return (
    <section id="depoimentos" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-black text-center mb-16 tracking-tight"
        >
          Quem testou, curtiu
        </motion.h2>

        {/* Custom Video Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-2xl bg-black flex items-center justify-center relative group cursor-pointer"
          onClick={handleInteraction}
        >
          <video 
            ref={videoRef}
            src={videoUrl}
            className="w-full h-auto block"
            playsInline
            autoPlay
            muted={isMuted}
            onEnded={handleEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Overlay UI */}
          <AnimatePresence>
            {/* Aviso de Som (Antes da primeira interação) */}
            {!firstPlayDone && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mb-4 animate-bounce">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <p className="text-white font-black uppercase tracking-[0.3em] text-xs">Toque para ouvir</p>
              </motion.div>
            )}

            {/* Play Button (Paused, after first play) */}
            {firstPlayDone && !isPlaying && !hasEnded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center z-10"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            )}

            {/* Replay Button (Ended) */}
            {hasEnded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20"
              >
                <button 
                  onClick={handleReplay}
                  className="flex flex-col items-center gap-4 text-white hover:scale-110 transition-transform"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <span className="font-black uppercase tracking-[0.2em] text-[10px]">Ver novamente</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pause Indicator (briefly shown when playing) */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying && (
               <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
               </div>
            )}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100"
            >
              <p className="text-lg font-bold text-gray-800 mb-6 leading-tight">
                {item.text}
              </p>
              <span className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">{item.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
