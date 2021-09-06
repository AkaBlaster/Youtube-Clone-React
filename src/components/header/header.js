import React from 'react';
import './header.scss'
import YoutubeLogo from '../images/youtube-logo-png-2074.png'
import {FaBars} from 'react-icons/fa'
import {Form} from 'react-bootstrap'
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications, MdApps} from "react-icons/md";
import {Button} from "react-bootstrap";


const Header = ({handleToggleSideBar}) => {


    return (
        <div className='header '>
            <FaBars
                className='header__menu'
                size={26}
                onClick={()=>handleToggleSideBar()}
            />

            <img
                src={YoutubeLogo}
                alt=''
                className='header__logo'
            />

            <Form>
                <input
                    type='text'
                    placeholder='Search'
                />
                <Button type='submit'>
                    <AiOutlineSearch size={22} />
                </Button>
            </Form>

            <div className='header__icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
            </div>
        </div>
    )
}

export default Header