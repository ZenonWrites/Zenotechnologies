import { useRef, useState } from "react";
import myVideo from "./assets/zeno-tech-promo.mp4";
import { Volume2, VolumeX } from "lucide-react"; // or your own icons

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
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
      className="relative w-full h-full overflow-hidden cursor-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      onClick={toggleMute}
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

      {/* Custom follow-cursor */}
      {hovering && (
        <div
          className="pointer-events-none absolute z-30 flex justify-center items-center gap-2 rounded-full bg-white text-black w-22 h-22 text-sm font-semibold shadow-lg -translate-x-1/2 -translate-y-1/2"
          style={{ left: pos.x, top: pos.y }}
        >
          {isMuted ? "Unmute" : "Mute"}
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </div>
      )}
    </div>
  );
}