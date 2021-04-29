import logo from './logo.svg';
import './App.css';
import { render as renderJSX } from "react-dom";
import AnyProps from './PropComps/AnyProps';
import TypeProps from './PropComps/TypeProps'; 
import CustomProps from './PropComps/CustomProps';
import SpecificProps from './PropComps/SpecificProps';
import SpecificValueProps from './PropComps/SpecificValueProps';
import RequiredProps from './PropComps/RequiredProps';
import ElementNode from './PropComps/ElementNode'; 



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

const missingProp = {
  myString: "My String",
  myNumber: 100,
  myBool: true,
  myFunc: () => "My Return Value",
  myArray: ["One", "Two", "Three"]
};

const myHeader = <h1>My Header</h1>;
const myContent = <p>My Content</p>;


function render(props) {
  renderJSX(<TypeProps {...props} />, document.getElementById("root"));
}

function App() {

  return (
    <div className="App">
      <h1>Prop Validation In React</h1>
      <section>
        <AnyProps label='any props' max={36} value={12} />
      </section>
      <section>
        <TypeProps label='type props' className='type_props' {...validProps} />
        {/* <TypeProps label='type props' className='type_props' {...invalidProps} />  */}
      </section>
      <section>
        <CustomProps  myArray={[]} myNumber={99} />
      </section>
      <section>
        <SpecificProps myDate="now" myCount={false} myUsers={[1, 2, 3]} /> 
      </section>
      <section>
        <SpecificValueProps user={{ name: "Harold", age: 30, online: true }} /> 
      </section>
      <section>
        <RequiredProps {...missingProp} />
      </section>
      <section>
        <ElementNode {...{ myHeader, myContent }} />
        <ElementNode myHeader="My Header" {...{ myContent }} />
        <ElementNode {...{ myHeader }} myContent="My Content" />
        <ElementNode
          {...{ myHeader }}
          myContent={[myContent, myContent, myContent]}
        />
      </section>


    </div>
  );

}


export default App;
