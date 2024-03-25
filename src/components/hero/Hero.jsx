import "./Hero.style.css"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <div className="hero-blue-box">POWERFULL</div>
                    <span>Group</span>
                    <span>Practice</span>
                    <span>With Trainer</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi recusandae eveniet
                        voluptatibus
                        dolorum quod, sit eius sint harum accusantium, maiores expedita! Repellat asperiores rem,
                        aperiam
                        beatae at sapiente. Ipsum.
                    </p>
                </div>

                <div className="hero-buttons">
                    <button className="sign-up-button">Sign Up</button>
                    <button className="details-button">Details</button>
                </div>
            </div>
        </section>
    )
}

export default Hero