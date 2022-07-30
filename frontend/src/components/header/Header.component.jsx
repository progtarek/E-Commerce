import HeaderLogo from "./HeaderLogo.component";
import TopBar from "./TopBar.component";

const Header = () => {
  return (
    <header className="flex flex-col">
      <TopBar />
      <HeaderLogo />
    </header>
  );
};

export default Header;
