export const Modal2 = ({onClose, title, content, button}) => {

    const handleClick = () => {
        onClose();
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modal" onClick={handleClick}>
            <div className="modal__white" onClick={(e) => handleChildClick(e)}>
                <h2>{title}</h2>
                {content}
                <button className="modal2__btn_close" onClick={handleClick}>{button}</button>
            </div>
        </div>
    )
}