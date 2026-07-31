import { useRef, useState, useEffect } from "react";
import myVideo from "./assets/zeno-tech-promo.mp4";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(true);

  // Detect whether the device has a real mouse (fine pointer + hover).
  // Touch devices get a simpler tap-to-mute button instead of the
  // follow-cursor pill, since hover/mousemove don't behave the same way there.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);

    const handleChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${canHover ? "cursor-none" : ""}`}
      onMouseEnter={canHover ? () => setHovering(true) : undefined}
      onMouseLeave={canHover ? () => setHovering(false) : undefined}
      onMouseMove={canHover ? handleMouseMove : undefined}
      onClick={canHover ? toggleMute : undefined}
    >
      <video
        ref={videoRef}
        className="w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Desktop: follow-cursor mute/unmute pill */}
      {canHover && hovering && (
        <div
          className="pointer-events-none absolute z-30 flex justify-center items-center gap-2 rounded-full bg-white text-black w-22 h-22 text-sm font-semibold shadow-lg -translate-x-1/2 -translate-y-1/2"
          style={{ left: pos.x, top: pos.y }}
        >
          {isMuted ? "Unmute" : "Mute"}
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </div>
      )}

      {/* Touch devices: fixed, always-visible tap-to-mute button */}
      {!canHover && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute z-30 bottom-4 right-4 flex items-center justify-center gap-1.5 rounded-full bg-white/90 text-black w-12 h-12 shadow-lg active:scale-95 transition-transform"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </div>
  );
}
