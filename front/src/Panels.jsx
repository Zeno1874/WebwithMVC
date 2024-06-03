import './Panels.css';

function Panels({image, image_name, title, content, link, children}) {
    return (
        <div className="panel">
            {image && <img src={image} alt={image_name} className="panel_img" />}
            <div className='panel_text'>
                <h2>{title}</h2>
                <div>{content}</div>
                {link && (
                    <a href={link} className="panel_link">{children}</a>
                )}
            </div> 
        </div>
    );
}

export default Panels;