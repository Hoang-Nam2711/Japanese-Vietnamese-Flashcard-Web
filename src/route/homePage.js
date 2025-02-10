import Header from "../components/header"
import userInfo from "../data/user1.json"

const HomePage = (props) => {
    console.log(userInfo)
    return(
        <div className="homepage-container">
            <Header centralAlign={"HomePage"}/>
            <p> User 1 </p>
        </div>
    )
}

export default HomePage