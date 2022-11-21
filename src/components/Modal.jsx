export const Modal = ({onClose, title, content, button}) => {

    const handleClick = () => {
        onClose();
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modal" onClick={handleClick}>
            <div className="modal__wrapper" onClick={(e) => handleChildClick(e)}>
                <h2>{title}</h2>
                {content}
                <button className="modal__btn_close" onClick={handleClick}>{button}</button>
            </div>
        </div>
    )
}