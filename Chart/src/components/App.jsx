import React from 'react';
import BarChart from "./BarChart" ;
import PieChart from "./PieChart" ;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { render: false };
  }

  render() {
  	return(
		<div>
			<BarChart labels={[1,2,3,4,5,6,7,8,9,10,11,12]} series={[33,75,25,155,77,88,45,67,22,44,55,66]}/>
			<PieChart value={60}/>
		</div>
	);
  }
}

export default App;

