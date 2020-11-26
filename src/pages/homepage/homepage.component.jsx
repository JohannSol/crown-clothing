import React from 'react';
import Directory from '../../components/directory/directory.component'
import './_homepage.styles.scss'

const HomePage = () => { // if you use () here, you don't have to put "return"
    return <div className='homepage'>
                <Directory />
            </div>
};

export default HomePage;