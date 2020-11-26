import React from 'react';
import './_menu-item.styles.scss'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, route, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div 
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
        </div>
        {/* <Link to={route}></Link> */}
    </div>
)

export default withRouter(MenuItem); // this allows access to history, match, location