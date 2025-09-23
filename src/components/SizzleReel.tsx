import BlueWordmark from "./BlueWordmark";

const SizzleReel = () => {
    return(
        <div className="relative w-full h-1/2 sm:h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://spotcointeractive.com/cdn/websites/spotnyc/_video/keyart-home-1080.mp4" type="video/mp4" media="(min-height: 1080px)" />
            <source src="https://spotcointeractive.com/cdn/websites/spotnyc/_video/keyart-home-720.mp4" type="video/mp4" media="(min-height: 720px)" />
            <source src="https://spotcointeractive.com/cdn/websites/spotnyc/_video/keyart-home-540.mp4" type="video/mp4" media="(min-height: 540px)" />
            <source src="https://spotcointeractive.com/cdn/websites/spotnyc/_video/keyart-home-360.mp4" type="video/mp4" media="(min-height: 360px)" />
            <source src="https://spotcointeractive.com/cdn/websites/spotnyc/_video/keyart-home-240.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center px-10">
            <BlueWordmark />
          </div>
        </div>
    )
}

export default SizzleReel;