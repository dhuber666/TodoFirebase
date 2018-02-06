
import React from 'react';

const Footer = (props) => {

    return (
        < div >

            <button onClick={props.handleToggleAll} className='btn-floating waves-effect waves-light blue right'><i class="material-icons">check_circle</i></button>

        </div >
    )

}

export default Footer;