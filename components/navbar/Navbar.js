import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <label className={styles.logo}>EDwithET</label>
            <ul className={styles.navLinks}>
                <li>
                    <a onClick={() => window.location.href = '/'}>Home</a>
                </li>
                <li>
                    <a onClick={() => window.location.href = '/videos'}>Videos</a>
                </li>
                <li>
                    <a onClick={() => window.location.href = '/'}>Material</a>
                </li>
                <li>
                    <a onClick={() => window.location.href = '/'}>Feedback</a>
                </li>
                <li>
                    <a onClick={() => window.location.href = '/'}>About</a>
                </li>
                <li>
                    <a onClick={() => window.location.href = '/'}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;