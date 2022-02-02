import Header from "../templates/header";
import Image from "next/image";

export default function Arena() {
  return (
    <>
      <Header />
      <main>
        {/* battle area container */}
        <div className="grid grid-rows-4 grid-cols-3 gap-2 w-4/5 m-auto">

          {/* row 1 */}
          <div className="row-start-1 row-span-1 col-start-1 col-span-1">
            pokemon cards
          </div>

          <div className="row-start-1 row-span-1 col-start-3 col-span-1">
            <p>Opponent</p>
            <p>*Opponents Level*</p>
          </div>

          {/* row 2 */}

          <div className="row-start-2 row-span-1 col-start-1 col-span-3">
            ooga booga middle
            {/* big arena image */}
          </div>

          {/* row 3 */}
          <div className="row-start-3 row-span-1 col-start-1 col-span-1">
            <p>Player name and level</p>
          </div>

          <div className="row-start-3 row-span-1 col-start-2 col-span-1">
            <p>Waiting/Your turn</p>
          </div>

          <div className="row-start-3 row-span-1 col-start-3 col-span-1">
            <p>Players cards</p>
          </div>


          {/* row 4 */}
          <div className="row-start-4 row-span-1 col-start-1 col-span-3 w-auto bg-gray-500 h-20">
            <p>buttons</p>
          </div>

        </div>
      </main>
    </>
  )
}