import './Cards.css';

function Cards({image, image_name, title, content}) {

    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={image} alt={image_name}/>
            <p>{content}</p>                       
        </div>
    );
}

export default Cards;