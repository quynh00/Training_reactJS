import React, { } from 'react';

function Navbar() {
    
    return (
        <div className='Navbar'>
            <div className='search-box'>
                <div className='input-box'>
                    <input type='text' placeholder={t('navbar.search_input')} className='input-search' />
                </div>
                <button type='submit' className='button-search'><ImPlus className='plus-icon' /></button>
            </div>
        </div>
    );
}
 
export default Navbar;
