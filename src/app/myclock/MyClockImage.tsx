import Image from "next/image"


export default function MyClockImage() {
  return (
    <div className="w-full flex justify-center">
      {/* <img className="w-1/2" src={clock} alt="시계" /> */}
      <Image 
              src={"/img/clock.png"}
              width={700} height={700} alt="시계" />
    </div>
  )
}

