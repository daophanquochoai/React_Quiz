import logo from "../assets/quizlogo.jpg"

export default function Header (){
    return(
        <header>
            <img src={logo} alt="Quiz Logo"/>
            <h1>ReactQuiz</h1>
        </header>
    );
}