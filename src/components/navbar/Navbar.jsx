import "./Navbar.style.css"

const Navbar = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const navbar = document.querySelector(".fixed-header")

        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    });

    return (
        <div className="fixed-header">
            <nav className="navbar">
                <img src="../../assets/logo.png" alt="Logo"/>

                <label htmlFor="menu-button"><img className="hamburger-icon" src="../../assets/hamburger-icon.png"
                                                  alt="Hamburger Icon"/></label>
                <input type="checkbox" id="menu-button" className="menu-button"/>
                <section className="navbar-right">
                    <a href="#">Home</a>
                    <a href="#classes">Classes</a>
                    <a href="#training">Training</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <button>JOIN US</button>
                </section>
            </nav>
        </div>
    )
}

export default Navbar