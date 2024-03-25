import "./StatBoxes.style.css"

const StatBoxes = () => {
    return (
        <section className="stat-boxes">
            <div className="stat-box">
                <div className="stat-box-number">325</div>
                <div>Course</div>
            </div>

            <div className="stat-box">
                <div className="stat-box-number">405</div>
                <div>Work Out</div>
            </div>

            <div className="stat-box">
                <div className="stat-box-number">305</div>
                <div>Working Hour</div>
            </div>

            <div className="stat-box">
                <div className="stat-box-number">705</div>
                <div>Happy Client</div>
            </div>
        </section>
    )
}

export default StatBoxes