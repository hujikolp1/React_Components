import logo from './logo.svg';
import './App.css';
import { render as renderJSX } from "react-dom";
import AnyProps from './PropComps/AnyProps';
import TypeProps from './PropComps/TypeProps'; 

const validProps = {
  myString: "abcdefg",
  myNumber: 1000,
  myBool: true,
  myFunc: () => "Return Something",
  myArray: [],
  myObject: { myKey: "My Val" }
};

const invalidProps = {
  myString: 0,
  myNumber: '0',
  myBool: 0,
  myFunc: () => 0,
  myArray: 0,
  myObject: { '0': 0 }
};


function render(props) {
  renderJSX(<TypeProps {...props} />, document.getElementById("root"));
}

function App() {

  return (
    <div className="App">
      <h1>Prop Validation In React</h1>
      <section>
        <AnyProps
          label='any props'
          max={36}
          value={12}
        />
      </section>
      <section>
        <TypeProps label='type props' className='type_props' {...validProps} />
        {/* <TypeProps label='type props' className='type_props' {...invalidProps} />  */}
      </section>
    </div>
  );

}


export default App;
