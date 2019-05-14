// Define global imports here
import React from 'react';

// Define relative imports here
import Title from './components/Title';

/**
 * This class is the root component of your React App.
 * All classes and components will be imported into the project when included in this class.
 */
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Title teamName="your_team_name" ></Title>
      </div>
    );
  }
}

export default App;
