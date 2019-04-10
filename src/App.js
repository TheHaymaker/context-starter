import React, { Component } from 'react';
import './App.css';

const ThemeContext = React.createContext('light');

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

// const ContextConsumingElement = () => {
//   return (
//     <ThemeContext.Consumer>
//       {theme => {
//         const styles =
//           theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'grey' };
//         return <button style={styles}>Themeable button</button>;
//       }}
//     </ThemeContext.Consumer>
//   );
// };

class ContextConsumingElement extends React.Component {
  render() {
    const theme = this.context;
    const styles = theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'grey' };
    return <button style={styles}>Themeable button</button>;
  }
}

ContextConsumingElement.contextType = ThemeContext;

// contextType for class declarations
// App.contextType = ThemeContext
export default App;
