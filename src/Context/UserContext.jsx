import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Ambil data dari localStorage saat pertama kali load
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    const savedCurrentUser = localStorage.getItem("currentUser");
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedCurrentUser) setCurrentUser(JSON.parse(savedCurrentUser));
  }, []);

  // Simpan ke localStorage setiap kali users berubah
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Simpan ke localStorage setiap kali currentUser berubah
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // CRUD
  const register = (userData) => {
    const exists = users.find((u) => u.email === userData.email);
    if (exists) {
      return { success: false, message: "Email sudah terdaftar!" };
    }
    setUsers([...users, userData]);
    return { success: true, message: "Registrasi berhasil!" };
  };

  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return { success: true, message: "Login berhasil!" };
    }
    return { success: false, message: "Email atau password salah!" };
  };

  const updateUser = (email, newData) => {
    const updated = users.map((u) =>
      u.email === email ? { ...u, ...newData } : u
    );
    setUsers(updated);
    if (currentUser?.email === email) {
      setCurrentUser({ ...currentUser, ...newData });
    }
  };

  const deleteUser = (email) => {
    setUsers(users.filter((u) => u.email !== email));
    if (currentUser?.email === email) {
      setCurrentUser(null);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        updateUser,
        deleteUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
