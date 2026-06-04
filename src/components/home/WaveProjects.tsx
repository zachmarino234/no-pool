import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Out of Order",
    date: "June 2025",
    role: "Producer",
    image: "/outoforder_logo.png",
    size: "2x2"
  },
  {
    name: "logo",
    image: "/npp_logomark.png",
    size: "1x1",
    showOverlay: false
  },
  {
    name: "Trisha Paytas' Big Broadway Dream",
    date: "February 2025",
    role: "Lead Producer",
    image: "/trishaphone.jpg",
    size: "wide"
  },
  {
    name: "Coming Soon!",
    date: "2026",
    role: "Lead Producer",
    image: "/outoforder.jpg",
    size: "wide"
  },
  {
    name: "logo",
    image: "/npp_wordmark.png",
    size: "1x1",
    showOverlay: false
  }
];

const WaveProjects = () => {
  return (
    <section className="relative w-full rounded-t-[2.5rem] overflow-hidden">
      {/* Rippling frame filter (shared by all project cards) */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="wave-ripple" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves="1"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="8s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
                values="0.008 0.012;0.011 0.009;0.008 0.012"
              />
            </feTurbulence>
            {/* Blur the displacement field so the wave edges stay smooth, not pixelated */}
            <feGaussianBlur in="noise" stdDeviation="2" result="smoothNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="smoothNoise"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Wave header */}
      <div className="relative w-full h-64 bg-transparent overflow-hidden z-10">
        {/* Darkest blue wave layer - bottom (renders first) */}
        <svg className="absolute w-full bottom-0 z-10" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ height: '180px' }}>
          <path fill="#013FFD">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              values="
                M0,30 C320,50 640,10 960,30 C1280,50 1440,30 1440,30 L1440,120 L0,120 Z;
                M0,30 C320,10 640,50 960,30 C1280,10 1440,30 1440,30 L1440,120 L0,120 Z;
                M0,30 C320,50 640,10 960,30 C1280,50 1440,30 1440,30 L1440,120 L0,120 Z"
            />
          </path>
        </svg>

        {/* Dark blue wave layer */}
        <svg className="absolute w-full bottom-0 z-20" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ height: '160px' }}>
          <path fill="#0277BD" fillOpacity="0.8">
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              values="
                M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40 C1400,60 1440,40 1440,40 L1440,120 L0,120 Z;
                M0,40 C200,20 400,60 600,40 C800,20 1000,60 1200,40 C1400,20 1440,40 1440,40 L1440,120 L0,120 Z;
                M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40 C1400,60 1440,40 1440,40 L1440,120 L0,120 Z"
            />
          </path>
        </svg>

        {/* Medium blue wave layer 2 */}
        <svg className="absolute w-full bottom-0 z-30" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ height: '140px' }}>
          <path fill="#039BE5" fillOpacity="0.7">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              values="
                M0,45 C240,65 480,25 720,45 C960,65 1200,25 1440,45 L1440,120 L0,120 Z;
                M0,45 C240,25 480,65 720,45 C960,25 1200,65 1440,45 L1440,120 L0,120 Z;
                M0,45 C240,65 480,25 720,45 C960,65 1200,25 1440,45 L1440,120 L0,120 Z"
            />
          </path>
        </svg>

        {/* Medium blue wave layer 1 */}
        <svg className="absolute w-full bottom-0 z-40" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ height: '120px' }}>
          <path fill="#29B6F6" fillOpacity="0.6">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              values="
                M0,35 C144,55 288,15 432,35 C576,55 720,15 864,35 C1008,55 1152,15 1296,35 C1440,55 1440,35 1440,35 L1440,120 L0,120 Z;
                M0,35 C144,15 288,55 432,35 C576,15 720,55 864,35 C1008,15 1152,55 1296,35 C1440,15 1440,35 1440,35 L1440,120 L0,120 Z;
                M0,35 C144,55 288,15 432,35 C576,55 720,15 864,35 C1008,55 1152,15 1296,35 C1440,55 1440,35 1440,35 L1440,120 L0,120 Z"
            />
          </path>
        </svg>

        {/* Light blue wave layer 2 */}
        <svg className="absolute w-full bottom-0 z-50" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ height: '100px' }}>
          <path fill="#81D4FA" fillOpacity="0.5">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              values="
                M0,50 C160,25 320,75 480,50 C640,25 800,75 960,50 C1120,25 1280,75 1440,50 L1440,120 L0,120 Z;
                M0,50 C160,75 320,25 480,50 C640,75 800,25 960,50 C1120,75 1280,25 1440,50 L1440,120 L0,120 Z;
                M0,50 C160,25 320,75 480,50 C640,25 800,75 960,50 C1120,25 1280,75 1440,50 L1440,120 L0,120 Z"
            />
          </path>
        </svg>

        {/* Light blue wave layer 1 - top (renders last) */}
        <svg className="absolute w-full bottom-0 z-60" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ height: '80px' }}>
          <path fill="#B3E5FC" fillOpacity="0.4">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              values="
                M0,40 C120,60 240,20 360,40 C480,60 600,20 720,40 C840,60 960,20 1080,40 C1200,60 1320,20 1440,40 L1440,120 L0,120 Z;
                M0,40 C120,20 240,60 360,40 C480,20 600,60 720,40 C840,20 960,60 1080,40 C1200,20 1320,60 1440,40 L1440,120 L0,120 Z;
                M0,40 C120,60 240,20 360,40 C480,60 600,20 720,40 C840,60 960,20 1080,40 C1200,60 1320,20 1440,40 L1440,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>

      {/* Project grid */}
      <div className="w-full h-full p-4 md:p-6 pb-20 sm:pb-20 md:pb-20 lg:pb-20 lg:p-8 lg:px-32 bg-[#7CCCF8]">
        <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-fr" style={{ gridAutoFlow: 'dense', gridAutoRows: 'minmax(200px, 1fr)' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaveProjects;
