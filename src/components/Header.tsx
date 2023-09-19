import logo from "@/assets/logo.png";
import effect from "@/assets/effect.svg";

const Header = () => {
  return (
    <header className="from-base-profile to-base-post/95 relative flex items-center justify-center overflow-hidden bg-gradient-to-b pb-32 pt-16">
      <img src={effect} className="absolute -left-10" />
      <img src={effect} className="absolute -right-10 rotate-180" />
      <img src={logo} alt="Github Blog Logo" />
    </header>
  );
};

export default Header;
