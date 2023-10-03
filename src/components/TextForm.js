import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to upper case!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to lower case!", "success");
  }

  const handleClearText = () => {
    setText("");
    props.showAlert("Text is cleared!", "success");
  }

  const undoText = () => {
    let len = text.split(/\s+/).length;
    let commaSeparatedText = text.split(/\s+/, len - 1).toString();
    let spaceSeparatedText = commaSeparatedText.replaceAll(",", " ");
    setText(spaceSeparatedText);
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  // const uploadFile = () => {

  // }

  // const downloadFile = () => {
    
  // }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea className="form-control" id="my-box" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8" onChange={handleOnChange}></textarea>
        </div>
        {/* <button className="btn btn-primary mx-1" onClick={uploadFile}>
          Upload File
        </button>
        <button className="btn btn-primary mx-1" onClick={downloadFile}>
          Download File
        </button> */}
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={undoText}>
          Undo
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
