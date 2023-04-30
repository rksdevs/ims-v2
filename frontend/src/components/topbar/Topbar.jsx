import "./topbar.css";
import NoImg from "../../assets/images/NoImg.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">IMS Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNoneIcon />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <LanguageIcon />
            </div>
            <div className="topbarIconContainer">
                <SettingsIcon />
            </div>
            <img src={NoImg} alt="Profile Pic" className="topAvatar"/>
        </div>
        </div>
    </div>
  )
}

export default Topbar