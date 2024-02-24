import { useNavigate } from "react-router-dom"
import './Body.css';
function Body(){
    const navigator = useNavigate()
    function submitHandler (){
        navigator("/sign-in")
    }
    return(
        
        <div>
      <div className="center-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <form className="get-started" onSubmit={submitHandler}>
        <input placeholder="Email address" className="input" required></input>  
            <button type="submit">Get Started</button>
        
        </form>
        </div>
    )
}

export default Body;