import "./Header.scss";
import Logo from "../Logo";

export default function Header({ children }) {
  return (
    <>
      <header>
        <Logo />
      </header>
      <div className="childrenContainer">{children}</div>
    </>
  );
}
