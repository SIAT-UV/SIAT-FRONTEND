import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../Buttons';
import { CamposRegister } from '../CamposRegister/CamposRegister';
import { FormLayout } from '../FormLayout/FormLayout';  
import { titulo, subtitulo} from './Login.module.css';


const schema = z.object({
  identificacion: z.string().min(1, { message: "La cédula es requerida" }),
  contraseña: z.string().min(6, { message: "La contraseña es incorrecta" }),
});

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
      <FormLayout>
        <h1 className={titulo}>Iniciar Sesión</h1>
        <h2 className={subtitulo}>Ingresa tus datos para iniciar seccion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CamposRegister register={register} name = "identificacion" errors={errors.identificacion}  label="Identificación" />
          <CamposRegister register={register} type= "password" name = "contraseña" errors={errors.contraseña}  label="contraseña" />
          <Button type="submit">Iniciar Sesión</Button>
        </form>
      </FormLayout>
  );
}