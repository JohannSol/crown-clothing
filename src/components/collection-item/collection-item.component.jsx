import React from 'react'
import './_collection-item.styles.scss'

const ColletionItem =({id, name, imageUrl, price}) => {  
        return (
            <div className="collection-item">
            <div 
                className = 'image'
                style = {{ backgroundImage : `url(${imageUrl})` }}
            />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>   
            </div>
            // </div>
        )
}

export default ColletionItem;
