import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  UserContext,
  UserContextInterface,
  User,
} from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { ReactNode, useState, useContext } from "react";
import { Alert } from "react-native";

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: "",
    password: "",
    isLoggedIn: false,
  });
  const login = async (name: string, password: string) => {
    try {
      const response = await fetch("http://192.168.1.38:8888/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);

      if (response.ok) {
        const userData = await response.json(); // Suponiendo que el servidor responde con información del usuario
        const cookie = response.headers.get("Set-Cookie");

        // Guardar el token de autenticación (si tu backend utiliza tokens)
        await AsyncStorage.setItem("authToken", userData.token || "");

        // Actualizar el contexto con la información del usuario
        setUser({
          name: userData.name,
          password: userData.password,
          isLoggedIn: true,
        });
      } else {
        console.error("Error en la respuesta:", response.status);
        Alert.alert("Error", "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al realizar la autenticación:", error);
      throw error;
    }
  };
  const logout = async () => {
    try {
      const response = await fetch("http://192.168.1.38:8888/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        await AsyncStorage.removeItem("authCookie");

        setUser({
          name: "",
          password: "",
          isLoggedIn: false,
        });
      } else {
        // Handle unsuccessful logout
        Alert.alert("Error", "Error al cerrar sesión");
      }
    } catch (e) {
      console.error("Error al realizar el cierre de sesión:", e);
    }
  };
  const contextValue: UserContextInterface = {
    user,
    setUser,
    login,
    logout,
    isLoggedIn: user.isLoggedIn,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe ser utilizado dentro de un UserProvider");
  }
  return context;
};
