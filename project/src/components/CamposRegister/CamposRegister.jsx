import { titulos, input,error } from './CamposRegister.module.css';


export const CamposRegister = ({ register, errors, label, name, type }) => {
    return (
        <div className={CamposRegister}>
        <label className={titulos} >{label} </label>
        <input className={input} {...register(name)} type={type} />
        {errors && <p className={error}>{errors.message}</p>}
        </div>
    
    )
}



    
