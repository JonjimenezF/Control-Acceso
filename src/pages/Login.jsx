import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // íconos reales
import logo from "../assets/logo.jpg";
import "../styles/style-login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-wrapper">
          {/* <div className="logo-circle">
            <img src={logo} alt="Logo" className="logo-img" />
          </div> */}
            <img src={logo} alt="Logo" className="logo-img" />
            <h2 className="login-title">Control de Acceso</h2>
            <p className="login-subtitle">
                Ingresa tus credenciales para acceder al sistema
            </p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" placeholder="Ingresa tu usuario" />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <div className="password-wrapper">
              <input                          //libreria react lucide-react
                type={showPassword ? "text" : "password"}
                //El input debe cambiar su atributo type entre "password" (contraseña oculta) y "text" (contraseña visible).
                placeholder="Ingresa tu contraseña"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
