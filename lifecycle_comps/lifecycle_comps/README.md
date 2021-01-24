# Install and Run
- <code> npm i </code> <br> 
- <code> npm start </code>

# Component Lifecycle Functions 

## In Class Components These Include: 
1) getDerivedStateFromProps() <br> 
- called on initial render and on new prop values <br> 
2) render()<br> 
- called on first mount and when new props come in or state changes <br> 
3) componentDidMount() <br> 
- called after component is mounted to the DOM <br> 
4) shouldComponentUpdate() <br> 
- called by comparing new states or props and returns true to re-render <br> 
5) getSnapShotBeforeUpdate() <br> 
- called as a synchronous version of render <br> 
6) componentDidUpdate() <br> 
- called when a component is updated <br> 
7) componentWillUnmount() <br> 
- called before a component is removed <br> 


