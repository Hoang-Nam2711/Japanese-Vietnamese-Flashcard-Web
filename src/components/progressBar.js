import "./progessBar.css"

const ProgressBar = (props) => {
    console.log(props.success)
    return(
        <div className="progress-container">
            <div className="progress-label">
                <div className="progress-number success-label"> {props.success} </div>
                <div className="progress-number fail-label"> {props.fail} </div>
            </div>
            <div className="progress-bar">
                <div className="progess-bar-success-fill" style={{width : `${props.successPer}%`}} />
                <div className="progess-bar-failed-fill" style={{width : `${props.failPer}%`}} />
            </div>
        </div>
    )
}

export default ProgressBar