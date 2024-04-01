const NavItemLoader = () => {
  return (
    <nav className="flex space-x-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex-1">
          <div className="h-[40px] bg-gray-100 animate-pulse"></div>
        </div>
      ))}
    </nav>
  );
};

export default NavItemLoader;
