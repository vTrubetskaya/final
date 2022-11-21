import { useNavigate } from "react-router-dom"

export const BlogItem = ({post}) => {

    const navigate = useNavigate();    
    const {id, title, body, image} = post;

    const handleClick = () => {
        navigate(`./${id}`);     
    }

    return (
        <div className="blog__item" onClick={handleClick}>
            <img className="blog__item__image" src={image} alt={title} />
            <div className="blog__item__wrapper">
                <h3 className="blog__item__title">{title}</h3>
                <p className="blog__item__info">{body}</p>
            </div>
        </div>
        
    )
}