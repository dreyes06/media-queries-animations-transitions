import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        //Dropdown needs a value to work with conditional rendering
        this.state = {
            dropdownView: false
        }
    }

     handleToggle = () => {
        this.setState({dropdownView: !this.state.dropdownView})
    }

    render(){
        return (
            <div className='header'>
                <img src='https://s3.amazonaws.com/media-p.slid.es/uploads/75809/images/1730601/DevMtnLogo.png' alt='devmountain' className='header-logo'/>
                <div className='dropdown-button' onClick={this.handleToggle} >
                    Menu
                </div>
                {
                this.state.dropdownView
                ? (
                    <nav className='dropdown-menu' >
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                    </nav>
                )
                : 
                null
                }
                <nav className='desktop-links' >
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </nav>
            </div>
        )
    }
}

export default Header; 