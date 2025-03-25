import { container, box } from './FormLayout.module.css';

export const FormLayout = ({ children}) => {
    return (
        <div className={container}>
            <div className={box}>
                {children}
            </div>
        </div>
    )
}