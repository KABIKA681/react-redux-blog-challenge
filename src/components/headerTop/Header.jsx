import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header-brand">
                <h3>
                    <Link to="/">AL</Link>
                </h3>
            </div>
            <div className="header-items">
                <ul className="headerItemsList">
                    <li className="headerListItem">
                        <Link exact to="/" style={{textDecoration: "none", color: "inherit"}}>Home</Link></li>
                    <li className="headerListItem">
                        Blog
                    </li>
                    <li className="headerListItem">Bookmarks</li>
                    <li className="headerListItem">Elements</li>
                    <li className="headerListItem">Playlists</li>
                </ul>
            </div>
        </div>
    )
}
