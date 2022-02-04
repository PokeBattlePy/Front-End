import BattleDeck from "./battleDeck";
import { CardsDisplay } from "../pages/arena";
import { data } from "../pages/api/dummy";

export default function BattleHistory() {
  

  return (
    <div>
      <h2 className="border-double border-4 border-black bg-opacity-80 bg-gray-300 p-2">Battle History</h2>
      <div className="border-double border-4 border-black bg-opacity-80 p-2">
        <table className="m-auto">
          <thead>
            <tr>
              <th className="px-10">Opponent</th>
              <th>Enemy Deck</th>
              <th>Your Deck</th>
              <th className="px-10">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <td>Kirk</td>
              <td className="px-20"><CardsDisplay pokemon={data ? data["Kirk"] : []}/></td>
              <td className="px-20"><CardsDisplay pokemon={data ? data["Kirk"] : []}/></td>
              <td>Lose</td>
            </tr>
            <tr> 
              <td>Andrew</td>
              <td className="px-20"><CardsDisplay pokemon={data ? data["Andrew"] : []}/></td>
              <td className="px-20"><CardsDisplay pokemon={data ? data["Andrew"] : []}/></td>
              <td>Win</td>
            </tr>
            <tr> 
              <td>Jordan</td>
              <td className="px-20"><CardsDisplay pokemon={data ? data["Jordan"] : []}/></td>
              <td className="px-20"><CardsDisplay pokemon={data ? data["Jordan"] : []}/></td>
              <td>Win</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
