import { Link } from "react-router-dom";

export const ToTree = () => {
    return(
        <div className="homepage__toTree">
            <div className="homepage__toTree__box">
                <h2 className="homepage__toTree__title">Showstoppers!</h2>
                <p className="homepage__toTree__info">We offer the widest selection of high quality, realistic Christmas trees on the market. Crafted with care to ensure years of enjoyment.</p>
                <Link className="link_white" to="/treesCatalog"><button className="homepage__toTree__btn">Shop now</button></Link>
            </div>
            <img className="homepage__toTree__img" src="imgs\flat-christmas-collage-illustration_52683-98789.jpg" alt="" />
        </div>
    );
}