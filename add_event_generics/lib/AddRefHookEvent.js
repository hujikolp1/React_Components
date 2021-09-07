import React, {useRef, useState, useEffect} from 'react'; 
import AutosizeInput from 'react-input-autosize';
import './App.css';

function App() {
    const ref = useRef();
    const formRef = useRef();
    const [isModalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState(""); 
    useOnClickOutside(ref, ()=>clickHandler());

function clickHandler (){
  console.log("clicked out");
  setModalOpen(false);
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "100%",
  padding: "50px",
  textAlign: "center",
  fontSize: "2rem",
  backgroundColor: "white",
  boxShadow: "0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)"
};

  return (
    <React.Fragment >

      <div style={{ padding: "50px" }}>
        {isModalOpen ? (
          <div ref={ref} style={styles}>
            <span>Click outside to close </span>
            {` `}
            <h3>Form</h3>
            <div className="form-container" >
              <form action="/#.php" onChange={e=>setPost(e.target.value)}>
                <label for="fname">Post:  </label>
                <input type="text" id="post" name="post"/><br></br>
                <br></br>
                <input type="submit" value="Submit"/>
              </form>        
            </div>
          </div>
        ) : (
          <button onClick={() => setModalOpen(true)}>Open</button>
        )}
      </div>

    </React.Fragment>
  )
  
}

export default App; 
