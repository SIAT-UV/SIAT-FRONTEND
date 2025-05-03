import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./UserProfile.css";
import avatar from "../../assets/icons/avatar.png"; 
import { Button } from "../Buttons";

export const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(avatar); 
  const fileInputRef = useRef(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [userData, setUserData] = useState({
    identificacion: "12345678",
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juanperez@mail.com"
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
        <p><strong>Identificación:</strong> {userData.identificacion}</p>
        <p><strong>Nombre:</strong> {userData.nombre}</p>
        <p><strong>Apellido:</strong> {userData.apellido}</p>
        <p><strong>Correo:</strong> {userData.correo}</p>
      </div>

      <Button handleClick={() => setShowPasswordForm(!showPasswordForm)} className="cambiar-password">
        {showPasswordForm ? "Cancelar" : "Cambiar Contraseña"}
      </Button>

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

          <Button  className="actualizar" type="submit">Actualizar Contraseña</Button>
        </form>
      )}
    </div>
  );
};
