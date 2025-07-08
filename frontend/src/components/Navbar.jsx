import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[75%] rounded-xl bg-base-100/80 backdrop-blur-md border border-base-content/20 shadow-lg z-50">
      {/* Logo */}
      <div className="flex-1">
        <span className="text-xl font-semibold text-base-content px-4 py-2">
          Payal Kharb
        </span>
      </div>

      {/* Navigation buttons */}
      <div className="hidden md:flex gap-2 px-4">
        {["About", "Projects", "Skills", "Contact"].map((section) => (
          <button
            key={section}
            onClick={() => {
              const el = document.getElementById(section.toLowerCase());
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2 bg-transparent text-base-content rounded-lg font-bold transform hover:-translate-y-1 transition duration-300"
          >
            {section}
          </button>
        ))}
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button className="btn btn-ghost text-base-content">
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
