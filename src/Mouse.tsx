// import { useEffect, useState } from 'react';

// interface Point {
//   x: number;
//   y: number;
// }

// function getAngle(p1: Point, p2: Point) {
//   return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
// }

// export default function MouseSpotlight() {
//   const [points, setPoints] = useState<Point[]>([]);

//   useEffect(() => {
//     function handleMouseMove(e: MouseEvent) {
//       setPoints(prev => [...prev.slice(-9), { x: e.clientX, y: e.clientY }]);
//     }
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       {points.map((point, i) => {
//         if (i === 0) return null; // Need previous point to create a streak segment

//         const prev = points[i - 1];
//         const angle = getAngle(prev, point);

//         // Position the streak halfway between prev and current point
//         const left = (prev.x + point.x) / 2;
//         const top = (prev.y + point.y) / 2;

//         // Calculate length of the segment
//         const length = Math.hypot(point.x - prev.x, point.y - prev.y);

//         // Fade effect for opacity (tail effect)
//         const opacity = (i + 1) / points.length;

//         return (
//           <div
//             key={i}
//             className="pointer-events-none fixed bg-white rounded-full"
//             style={{
//               left: left,
//               top: top,
//               width: length,
//               height: 4,             // thin streak
//               opacity: opacity,
//               transform: `translate(-50%, -50%) rotate(${angle}deg)`,
//               transformOrigin: 'center center',
//               transition: 'opacity 0.2s',
//               filter: 'blur(1px)',   // optional: subtle blur for smoothness
//             }}
//           />
//         );
//       })}
//     </>
//   );
// }
import { useEffect, useRef } from 'react';

export default function RaceTrackBorder() {
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateSize() {
      if (!borderRef.current) return;
      const height = document.documentElement.scrollHeight;
      borderRef.current.style.height = height - 20 + 'px'; // minus bottom margin only
    }
    updateSize();

    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', updateSize);
    };
  }, []);

  return <div ref={borderRef} className="race-track-border"></div>;
}
