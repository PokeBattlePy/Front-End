import Link from "next/link";
import { useUser } from "../context/userContext";

export default function Header() {
  const { user, login, logout } = useUser();

  return (
    <header className="flex justify-between p-5 border-b-4 border-black items-center">
      <div>
        <h1>PokeBattlePy</h1>
      </div>
      {user ? <LoggedIn logout={logout} /> : <NotLoggedIn login={login} />}
    </header>
  );
}

export function NotLoggedIn({ login }) {

  function handleLogin() {
    login();
  }
  return (
    <div className="flex justify-around items-center">
      <Link href="/">
        <a className="px-2">Home</a>
      </Link>
      <form>
        <label className="px-1">Username</label>
        <input className="px-1" name="username" type="text" />
        <label className="px-1">Password</label>
        <input className="px-1" name="password" type="password" />
      </form>
      <button onClick={handleLogin} className="px-4 py-1 border-2 border-black">Login</button>
    </div>
  );
}

export function LoggedIn({ logout }) {

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <Link href="/">
        <a className="px-2">Home</a>
      </Link>
      <Link href="/deck">
        <a className="px-2">Deck</a>
      </Link>
      <Link href="/arena">
        <a className="px-2">Battle</a>
      </Link>
      <button className="px-2" onClick={handleLogout}>Logout</button>
    </div>
  );
}
