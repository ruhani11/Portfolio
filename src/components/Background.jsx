import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Background(){

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen:{
          enable:true,
          zIndex:-1
        },

        background:{
          color:"#020617"
        },

        particles:{
          number:{ value:80 },

          color:{ value:"#38bdf8" },

          links:{
            enable:true,
            color:"#38bdf8",
            distance:150,
            opacity:0.4
          },

          move:{
            enable:true,
            speed:1
          },

          size:{
            value:3
          }
        }
      }}
    />
  )
}