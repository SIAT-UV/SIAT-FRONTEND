import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./UserProfile.css";
import avatar from "../../assets/icons/avatar.png"; 
import { Button } from "../Buttons";
import { profileUser } from "../../services/profileUser"; // ruta ajustada según tu estructura

export const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(avatar); 
  const fileInputRef = useRef(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [userData, setUserData] = useState({
    cedula: "",
    first_name: "",
    last_name: "",
    email: ""
  });

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  const onPasswordChange = (data) => {
    console.log("Nueva contraseña:", data);
    reset();
    setShowPasswordForm(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePic(url);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // ✅ Llamada al backend para obtener datos reales
  useEffect(() => {
    const { call, controller } = profileUser();

    call.then((res) => {
      if (res?.data) {
        setUserData({
          cedula: res.data.cedula,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          email: res.data.email
        });

        // Si tienes una URL de imagen en la respuesta
        if (res.data.foto_perfil_url) {
          setProfilePic(res.data.foto_perfil_url);
        }
      }
    }).catch((err) => {
      if (err.name !== "CanceledError") {
        console.error("Error al obtener datos del usuario:", err);
      }
    });

    return () => controller.abort();
  }, []);

  return (
    <div className="profile-container">
      <h2>Mi Perfil</h2>

      <div className="profile-picture-section">
        <img
          src={profilePic}
          alt="Foto de perfil"
          className="profile-pic"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Button handleClick={triggerFileInput} className="cambiar-foto">
          Cambiar Foto
        </Button>
      </div>

      <div className="user-info">
        <p><strong>Nombre:</strong> {userData.first_name}</p>
        <p><strong>Apellido:</strong> {userData.last_name}</p>
        <p><strong>Identificación:</strong> {userData.cedula}</p>
        <p><strong>Correo:</strong> {userData.email}</p>
      </div>

      <div className="botones-perfil">
        <Button className="mis-registros" type="submit">Ver Mis Registros</Button>

        <Button handleClick={() => setShowPasswordForm(!showPasswordForm)} className="cambiar-password">
          {showPasswordForm ? "Cancelar" : "Cambiar Contraseña"}
        </Button>
      </div>

      {showPasswordForm && (
        <form onSubmit={handleSubmit(onPasswordChange)} className="password-form">
          <h3>Cambiar Contraseña</h3>

          <input
            type="password"
            placeholder="Nueva Contraseña"
            {...register("newPassword", { required: true, minLength: 6 })}
          />
          {errors.newPassword && <span>La contraseña debe tener al menos 6 caracteres</span>}

          <input
            type="password"
            placeholder="Confirmar Contraseña"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watch("newPassword") || "Las contraseñas no coinciden"
            })}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

          <Button className="actualizar" type="submit">Actualizar Contraseña</Button>
        </form>
      )}
    </div>
  );
};