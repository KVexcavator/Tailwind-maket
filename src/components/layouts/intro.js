import imgMusic from "../../../public/images/music.svg";

export default function Intro(){
  return(
    <div className="flex justify-center bg-gray-300">
      <div className="mx-4 order-last self-center">
        <img src={imgMusic} className="w-24 h-24 rounded-full" />
      </div>
      <div className="mx-4 self-center text-center">
        <h1 className="text-6xl  font-bold text-blue-700">Welcome to LayOut</h1>
        <h2 className="text-3xl font-semibold  text-blue-300">A premium in sight and sound</h2>
        <button className="my-4 px-4 py-2 border-2 border-black rounded-lg
text-white bg-blue-400 hover:bg-indigo-700" >Pess My</button>
      </div>
    </div>
  )
}
