import { Button, IconButton, Dialog, Modal, TextField } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import './Header.scss';
import Auth from './Auth';
import Register from './Register';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isReg, setIsReg] = useState(true);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const changeMode = () => {
        setIsReg(!isReg);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="/icons/reddit-icon-svgrepo-com.svg" alt="logo" className="logo__main-icon" />
                <span>Reddit</span>
            </div>
            <div className="search-wrapper">
                <img src="/icons/search-svgrepo-com.svg" alt="search" className="search-icon" />
                <input type="text" placeholder="Search Reddit" className="header__search" />
            </div>
            <div className="actions">
                <img className="actions__qr-icon" src="/icons/qr-code-scan-svgrepo-com.svg" alt="" />
                <Button className="actions__getapp-btn" variant="contained">
                    Get app
                </Button>
                <Button className="actions__login-btn" onClick={onOpen} variant="contained">
                    log in
                </Button>
                <IconButton>
                    <MoreHorizIcon className="actions__horiz-btn" />
                </IconButton>
                <Dialog className="modal" open={open} onClose={onClose}>
                    <div className="modal__wrap">{isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}</div>
                </Dialog>
            </div>
        </header>
    );
};

export default Header;
