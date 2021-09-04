import React, {useState} from 'react'

function TextForm(props) {
    
    function handleClick(){
        let newText = text.toUpperCase();
        settext(newText);
        props.alert("Converted to UpperCase", "success");
    }

    const handleChange = (event) => {
        settext(event.target.value);
    }

    const handleClick2 = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.alert("Converted to LowerCase", "success");
    }

    const handleClear = () => {
        let newText = "";
        settext(newText);
        props.alert("TextArea Cleared", "success");
    }

    const handleCopy = () => {
        var Text = document.getElementById("mytext");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.alert("Text copied to Clipboard", "success");
    }
 
    const handleSpace = () => {
        let newText = text.split(/[  ]+/);
        settext(newText.join(" "));
        props.alert("Extra Space Removed", "success");
    }
    
    const [text, settext] = useState("");
    
    return(
        <>
     
            <div className="mb-3" style={{color: props.mode==="dark"?"white":"#4f3174"}}>
            <h1 className="my-3">{props.heading}</h1>
            {/* <label for="mytext" className="form-label">Example textarea</label> */}
            <textarea className="form-control my-3" id="mytext" style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"#4f3174" }} placeholder="Enter Text Here" value={text} onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClick2}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy To Clipboard</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra Spaces</button>



            <div className="container my-3" style={{color: props.mode==="dark"?"white":"#4f3174"}}>
                <h1 className="my-2">Your Text Summary</h1>
                <p className="my-2">{text.split(" ").length} Words and {text.length} Characters</p>
                <p className="my-2">Time To Read = {0.008 * text.split(" ").length} Minutes</p>
                <p className="my-2">Time to Speak = {0.01 * text.split(" ").length} Minutes</p>
                <h2 className="my-2">Text Preview</h2>
                <p className="my-2">{text.length>0?text:"Enter text above to preview it here"}</p>
            </div>

            
        </>
    )
}

export default TextForm;