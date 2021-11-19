import "./Input.css"

const Input = ({ text, result }) => {
    return(
    <div className="input-wrapper">
        <div className="result">
            <h1>{result}</h1>

    </div>

        <div className="text"></div>
        <h3>{text}</h3>
    </div>
    );
};

export default Input;