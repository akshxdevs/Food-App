import { useNavigate } from "react-router-dom";
import './Survey.css'

export const Survey = () => {
    const navigate = useNavigate();
    const handleclick = () =>{
        alert("thankyou");
        navigate("/menu")
    }

    return(
        <div className="main-container">
            <div className="survey-card">
                <h2 className="header-1"> Gives us your feed back about the order?? </h2>
                <p className="line-1">how was your ordering experence share with us..</p>
                <button className="btn-1" onClick={handleclick}>😄</button><button className="btn-2" onClick={handleclick}>😁</button><button className="btn-3" onClick={handleclick}>😀</button><button className="btn-4" onClick={handleclick}>☹️</button><button className="btn-5" onClick={handleclick}>😔</button>
            </div>
        </div>
    );
}