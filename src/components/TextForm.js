import React, {useState} from 'react'


export default function TextForm(props) {
  const [text , setText] = useState('');
  // setText('Enter the Text');

  // function to change text to uppercase
  const handleUpclick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }

  // function to change text to lowercase
  const handleLowCkick = ()=> {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  // functionn to clear text
  const clearText = () => {
    let newText = ' ';
    setText(newText);
    props.showAlert("Text cleared","success");
  }

  // function to handle onchange
  const handleOnChange = (event) => {
    //  console.log("onchange is done");
     setText(event.target.value);
  }

  // function to handle copy
  const handleCopy = () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clippboard","success");
  }

  // function to handle extra spaces
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces  removed","success");
  }

  
  return (
    <>
    <div className="container" style={{ color:props.mode==='dark'?'white':'#042743' }}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
               <textarea className="form-control" value={text}onChange={handleOnChange} style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743' }}id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpclick} >Convert To UpperCase</button>

          <button  className="btn btn-primary mx-2" onClick={handleLowCkick}>Convert To LowerCase</button>

          <button  className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>

          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

          <button className="btn btn-primary" onClick={handleExtraSpaces}>Handle ExtraSpaces</button>
    </div>
    {/* use my for margin on y-axis */}
    <div className="conatainer my-3" style={{ color:props.mode==='dark'?'white':'#042743' }}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} Words , {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length}Minutes to read the paragraphs</p>
          <h2>Text Preview</h2>
          <p>{text.length>0?text:"Enter the text to preview here"}</p>
    </div>
    </>
  ) 
}
