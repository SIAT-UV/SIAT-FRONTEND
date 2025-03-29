import { banner} from './Banner.module.css';

export const Banner = ({imgUrl, children}) => {
    return (
        <div className={banner} style={{ backgroundImage: `url(${imgUrl})` }}>
        </div>
    );
}