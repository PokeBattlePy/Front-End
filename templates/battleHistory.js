import BattleDeck from "./battleDeck";

export default function BattleHistory(props) {
  function createRow(battle) {
    return (
      <tr className="divide-x">
        <td>{battle.opponent}</td>
        <td>
          <div>
            <BattleDeck deck={battle.opponent_deck} />
          </div>
        </td>
        <td>
          <div>
            <BattleDeck deck={battle.player_deck} />
          </div>
        </td>
        <td>
          {battle.result}
        </td>
      </tr>
    )
  }

  return (
    <div>
      <h2>Battle History</h2>
      <div className="border-2">
        <table>
          <thead>
            <tr>
              <th>Opponent</th>
              <th>Enemy Deck</th>
              <th>Your Deck</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {props.history.map((battle) => createRow(battle))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
