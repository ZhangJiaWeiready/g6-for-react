import React from 'react';
import { Graph, G6, EdgeMapping } from 'react-g6';

G6.registerEdge('flowingEdge', {
  afterDraw: function afterDraw(item) {
    var keyShape = item.getKeyShape();
    keyShape.attr('lineDash', [10, 10]);
    keyShape.attr('lineDashOffset', 0);
    keyShape.animate({
      lineDashOffset: -20,
      repeat: true
    }, 500);
  }
});

export default class CustomFlowEdge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200
        }, {
          id: 'node2',
          x: 300,
          y: 200
        }],
        edges: [{
          target: 'node2',
          source: 'node1'
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
            <EdgeMapping shape="flowingEdge"/>
          </Graph>
        </div>
      </div>
    );
  }
}
