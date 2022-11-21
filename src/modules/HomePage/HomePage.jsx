import { Link } from "react-router-dom";
import { ToBlog } from "./components/ToBlog";
import { ToTree } from "./components/ToTree"

export const HomePage = () => {
    return (
        <div>
            <div className="homepage__logo">      
                <div className="homepage__logo__box">         
                    <img className="homepage__logo__img" src="imgs\winter123.png" alt=""/>
                    <p className="homepage__logo__info">Let your home improvement journey begin.</p>
                    <Link className="link_white" to="/catalog">
                        <button className="homepage__logo__explore_btn">Explore now</button>
                    </Link>
                </div>
            </div> 
            <div className="homepage__divider"></div>
            <ToTree />
            <ToBlog />
        </div>
        
    )
}