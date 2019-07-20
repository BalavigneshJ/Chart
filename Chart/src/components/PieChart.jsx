import React from 'react';
import ChartistGraph from 'react-chartist';

class PieChart extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    var data = {
      series: [100, this.props.value]
    };

    var options = {
      width : 750 ,
      height : 450 ,
      donut: true,
      donutWidth: 25,
      startAngle: 0,
      total:100,
      showLabel: true
    };

    var listener = { draw : function(data) {
      if(data.type === 'slice' && data.index !== 0) {

        var pathLength = data.element._node.getTotalLength() ;
        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'  //No I18N
        });

        var animationDefinition = {
          'stroke-dashoffset': {  //No I18N
            id: 'anim' + data.index, //No I18N
            dur: 1000,
            from: -pathLength + 'px',  //No I18N
            to:  '0px', //No I18N
            easing: [0.25, 0.46, 0.45, 0.94],
            // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
            fill: 'freeze' //No I18N
          }
        };

        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px' //No I18N
        });

        data.element.animate(animationDefinition ,false);
      }else if(data.type === 'label'){
        if(data.index === 0){
          data.element.remove() ;
        }else if(data.index === 1){
          //data.element.root().width() 
          data.element._node.textContent = data.text + "%" ;
          data.element.attr({
            dx: 750/2, dy : 450/ 2 
          });
        }
      }
    }}

    return (
      <div>
          <ChartistGraph data={data} options={options} type={"Pie"} listener={listener} />
      </div>
    )
  }
}

export default PieChart ;
