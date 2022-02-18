import imgMusic from "../../../public/images/music.svg";

// const ButtonStyle = (color) => {
//   return `text-${color}-300 hover:text-${color}-700`
// }

export default function Intro(){
  return(
    <div>
    <div className="flex justify-center bg-gray-300">
      <div className="mx-4 order-last self-center">
        <img src={imgMusic} className="w-24 h-24 rounded-full" />
      </div>
      <div className="mx-4 self-center text-center">
        <h1 className="text-6xl  font-bold text-blue-700">Welcome to LayOut</h1>
        <h2 className="text-3xl font-semibold  text-blue-300">A premium in sight and sound</h2>
        <button className="my-4 px-4 py-2 border-2 border-black rounded-lg
    text-white bg-yellow-400 hover:bg-yellow-700" >Pess My</button>
      </div>
    </div>
      <article className="prose lg:prose-xl border-2 m-2.5 pl-3" >
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
      <input type="checkbox" className="rounded text-pink-500" />
    </div>
  )
}
