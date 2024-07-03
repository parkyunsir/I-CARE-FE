import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const Header = (props) => {
    const title = props.title;
    const type = props.type;
    const routeBack = props.routeBack || null;
    const navigate = useNavigate();

    const goBack = () => {
        if (routeBack){
            navigate(routeBack);
        } else {
            navigate(-1);
        }
    };

    if(type === "home") {
        return (
            <div className="Header">
                <div className="header_left">
                    <SettingsOutlinedIcon
                        sx={{cursor: 'pointer'}}
                        onClick={() => navigate('/')} />
                </div>
                <div className="header_title">{title}</div>
                <div className="header_right">
                    <PermIdentityOutlinedIcon
                        sx={{cursor: 'pointer'}}
                        onClick={() => navigate('/')} />
                </div>
            </div>
        )
    } else if(type === "back") {
        return (
            <div className="Header">
                <div className="header_left">
                    <ArrowBackIosOutlinedIcon
                        onClick={goBack}
                        sx={{cursor: 'pointer'}} />
                </div>
                <div className="header_title">{title}</div>
                <div className="header_right"></div>
            </div>
        )
    }
};

export default Header;