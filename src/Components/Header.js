import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        //Dropdown needs a value to work with conditional rendering
    }

    render(){
        return (
            <div className='header'>
                <img src='https://s3.amazonaws.com/media-p.slid.es/uploads/75809/images/1730601/DevMtnLogo.png' alt='devmountain' className='header-logo'/>
                <div className='dropdown-button'>
                    Menu
                </div>
            </div>
        )
    }
}

export default Header;