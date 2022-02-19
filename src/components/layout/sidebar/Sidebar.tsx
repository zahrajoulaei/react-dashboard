import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </div>
    );
}

