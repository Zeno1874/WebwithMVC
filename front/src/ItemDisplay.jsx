import './ItemDisplay.css';

function ItemDisplay({ itemList }) {   

    console.log('itemList:', itemList);
    
    const list = itemList.map( item => {
        return (
            <div className="display" key={item.image_name}>
                <img src={item.image} alt={item.image_name}/>
                <h1>{item.item_name}</h1>
            </div>
        ); 
    });
    return (
        <section className='choice'>
            { list }
        </section>
    );
}
  
export default ItemDisplay;