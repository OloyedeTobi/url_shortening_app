import '../Styles/Navbar.css';
export const Navbar: React.FC = () =>{
    return(
        <div className="nav-container">
            <div className="logo">shortly</div>
            <div className="navbar">
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Resources</a>
            </div>
            <div className="login">
                <button>Login</button>
                <button>sign up</button>
            </div>
        </div>
    )
}