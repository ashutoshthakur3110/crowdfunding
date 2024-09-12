import React from "react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
const LandingPage = () =>{
    const [init , setinit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
           
        }).then(() => {
            setinit(true);
        });
    }, []);


    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="landing-page">
         <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#00003e",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#00b4d8",
                    },
                    links: {
                        color: "#00b4d8",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
     <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  <h1 class="uppercase text-[5.5rem]">CryPtoRaise</h1>
  <p class="text-[1.5rem]">The Future of Decentralization Funding</p>
  <Link to="./register">
  <button class="relative left-48 flex items-center mt-5  justify-center w-50 max-w-full min-w-[140px] p-[3px] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-lg shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] text-white text-[18px] cursor-pointer transition-all duration-300 select-none hover:outline-none active:scale-90">
  
  <span class="bg-[rgb(5,6,45)] w-full h-full p-4 px-6 rounded-md transition-[background] duration-300">
    Register Now
  </span>

</button>
</Link>

 </div>
 
</div>
)


}


export default LandingPage;