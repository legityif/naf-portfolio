function Header({ navItems }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-mark">Y.Y</div>
        <div className="brand-text">
          <span className="brand-name">Yifan Yang</span>
          <span className="brand-role">Software engineer · Backend</span>
        </div>
      </div>
      <nav className="nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
