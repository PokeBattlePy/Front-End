export default function Card({ pokemon }) {
  let colors = {
    bug: {
      background1: "bg-green-100"
    }
  };

  return (
    // outter border of card
    // card container
    <div className="absolute h-80 w-60 rounded-md border border-sky-500">
      {/* //colors["bug"].background */}
      <div className="bg-yellow-200 border-dashed p-4 rounded-md">
        <div className="bg-yellow-200 rounded-full bg-contain bg-center ">
          Electric
        </div>
        <img
          src="Pikachu.jpg"
          alt="Pikachu"
          width="200"
          height="400"
          position="justify: center"
        />
        <div className="sprite img "></div>
        <div className="rarity  absolute inset-x-0">1st tier</div>
        <div className="hp value absolute bottom- right-0">100hp</div>
        <div className="defense stat">150 defense</div>
        <div className="attack stat">30 attack</div>
        <div className="abilities">Shock, Flop, Dash, Burrow</div>
      </div>
    </div>
  );
}
