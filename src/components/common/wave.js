import WaveLib from 'react-wavify'

const waveStyle = {
    transform: "rotate(180deg)",
    position: "absolute",
    height: "100vh",
    width: "100vw",
    zIndex: -1,
    
     }
export default function Wave(props) {


  return (
    <div style={waveStyle}>
        <WaveLib 
          fill='darkgray'
          rotate={3.14}
          paused={false}
          style={{ height: "100vh" }}
          options={{
            height: 350,
            amplitude: 100,
            speed: 0.1,
            points: 5
            }}
          />
      </div>
  )
}
