import { Link } from "react-router-dom";

export const ToBlog = () => {
    return(
        <div className="homepage__toBlog">
                <img className="homepage__toBlog__img"  src="imgs\christmas-season-celebration-vertical-banners-set_23-2149730655.jpg" alt="" />
                <div className="homepage__toBlog__box">
                    <h2 className="homepage__toBlog__title">Christmas Bucket List</h2>
                    <p className="homepage__toBlog__info">Start this holiday bucket list in early December and it will not only keep you on a better schedule for the season, but the activities will also get you in the spirit of Christmas.</p>
                    <Link className="link_white" to="/blog">
                        <button className="homepage__toBlog__btn">Learn more</button>
                    </Link>
                </div>                
            </div>
    );
}