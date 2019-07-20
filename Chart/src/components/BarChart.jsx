import React from 'react';
import ChartistGraph from 'react-chartist';

class BarChart extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    var data = {
      labels: this.props.labels,
      series: [this.props.series]
    };

    var options = {

      high : Math.ceil(Math.max(...this.props.series)/20) * 20,
      low : 0 ,

      axisX : {
        showGrid : false ,
      },

      axisY : {
        showGrid : true ,
      }
    };

    var listener={"draw" : function(data) {  //No I18N
      if(data.type === 'bar') {
        data.element.animate({
          y2: {
            begin: 0,
            dur: 1000,
            from: data.y1 ,
            to: data.y2 
          }
        });
      }
      // else if(data.type === 'grid' && data.index === 0){
      //   data.element._node.setAttribute('class', data.element._node.getAttribute('class') + ' ' + 'ct-axis');
      // }
    }}

    var type = 'Bar';  //No I18N

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} listener={listener} />
      </div>
    )
  }
}

export default BarChart ;
