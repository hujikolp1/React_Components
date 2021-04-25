import logo from './logo.svg';
import './App.css';
import PropComp from './PropComp/PropComp'

function App() {
  return (
    <div className="App">
      <h1>Prop Validation In React</h1>
      <section>
        <PropComp
          label='your name'
          max={36}
          value={12}
        />
      </section>
    </div>
  );
}

export default App;
