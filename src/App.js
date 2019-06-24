import React, {Component} from 'react';
import Counter from './component/Counter';

class App extends Component{
  handleCreate = (data) => {
    console.log(data);
  }

  render(){
    return(
      <div>
        <Counter />
      </div>
    )
  }
}
export default App;
