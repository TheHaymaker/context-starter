import React, { Component, useContext } from 'react';
import './App.css';
import { ThemeContext } from './contexts';

class App extends Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <NestedElement>
          <NestedElement>
            <NestedElement>
              <ContextConsumingElement />
            </NestedElement>
          </NestedElement>
        </NestedElement>
      </ThemeContext.Provider>
    );
  }
}

const NestedElement = ({ children }) => {
  return <div>{children}</div>;
};

//  This will re-render every single time the Context value is changed
const ContextConsumingElement = () => {
  // equivalent to static contextType = MyContext in a class
  //  or to <MyContext.Consumer>.
  // useContext(MyContext) only lets you read the context
  // and subscribe to its changes. You still need a <MyContext.Provider>
  // above in the tree to provide the value for this context.
  const theme = useContext(ThemeContext);
  const styles = theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'grey' };
  console.log(theme, styles);

  return <button style={styles}>Themeable button</button>;
};

export default App;
