import Link from "next/link";
import { useUser } from "../context/userContext";

export default function Header() {
  const { user, login, logout } = useUser();

  return (
    <header className="flex justify-between p-5 border-b-4 border-black items-center">
      <div>
        <h1 className="poke-text text-xl">PokeBattlePy</h1>
      </div>
      {user ? <LoggedIn logout={logout} /> : <NotLoggedIn login={login} />}
    </header>
  );
}

export function NotLoggedIn({ login }) {

  function handleLogin(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    login(username,password);
  }
  
  return (
    <div className="flex justify-around items-center">
      <Link href="/">
        <a className="px-2 mr-8 underline">Home</a>
      </Link>
      <form onSubmit={handleLogin}>
        <label className="px-1">Username</label>
        <input className="px-1 bg-gray-200 w-36" name="username" type="text" />
        <label className="px-1 ml-2">Password</label>
        <input className="px-1 bg-gray-200 w-36" name="password" type="password" />
        <button type="submit" className="px-4 py-1 border-2 border-black ml-3">Login</button>
      </form>
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
        <a className="px-2 hover:underline">Home</a>
      </Link>
      <Link href="/deck">
        <a className="px-2 hover:underline">Deck</a>
      </Link>
      <Link href="/arena">
        <a className="px-2 hover:underline">Battle</a>
      </Link>
      <button className="px-2 hover:underline" onClick={handleLogout}>Logout</button>
    </div>
  );
}
