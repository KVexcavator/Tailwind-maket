
export default function Box(){
  return(
    <div>
      <div class="mb-10">
        <button class="p-10 border border-black">One</button>
        <button class="m-10 border border-black">Two</button>
        <button class="m-2 p-2 border-4 border-black">Three</button>
      </div>
      <div>
        <button class="m-4 p-4 border-2 border-black rounded-md">Four</button>
        <button class="m-4 p-4 border-2 border-black rounded-2xl">Five</button>
        <button class="m-4 p-4 border-2 border-black rounded-full">Six</button>
      </div>
      <div>
        <button class="m-4 p-4 rounded-md ring">Four</button>
        <button class="m-4 p-4 rounded-2xl ring-2">Five</button>
        <button  class="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black">
          Six
        </button>
      </div>
    </div>
  )
}
