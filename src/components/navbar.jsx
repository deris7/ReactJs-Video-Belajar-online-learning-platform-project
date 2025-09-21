import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "./logo";
import { useUserStore } from "../stores/useUserStore";

export default function Navbar() {
  const { currentUser, logout } = useUserStore();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Logo />
        <div className="nav-right">
          <Link to="/kategori" className="nav-link">
            Kategori
          </Link>

          {currentUser ? (
            <div className="dropdown-wrapper" ref={dropdownRef}>
              <img
                src={"/images/profile.png"}
                alt="User Profile"
                className="profile-img"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">
                    Profil Saya
                  </Link>
                  <Link to="/kelas-saya" className="dropdown-item">
                    Kelas Saya
                  </Link>
                  <Link to="/pesanan-saya" className="dropdown-item">
                    Pesanan Saya
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item logout"
                  >
                    ↩ Keluar
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="btn green">
                Login
              </Link>
              <Link to="/register" className="btn light-green">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
