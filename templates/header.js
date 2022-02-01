import Link from "next/link";

export default function Header() {
  let user = false;
  let loginSection;
  if (user) {
    loginSection = <LoggedIn />;
  } else {
    loginSection = <NotLoggedIn />;
  }

  return (
    <header className="flex justify-between p-5 border-b-4 border-black items-center">
      <div>
        <h1>PokeBattlePy</h1>
      </div>
      {loginSection}
    </header>
  );
}

export function NotLoggedIn() {
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
      <button class="px-4 py-1 border-2 border-black">Login</button>
    </div>
  );
}

export function LoggedIn() {
  return (
    <div>
      <a>Home</a>
      <a>Deck</a>
      <a>Battle</a>
      <button>Logout</button>
    </div>
  );
}
