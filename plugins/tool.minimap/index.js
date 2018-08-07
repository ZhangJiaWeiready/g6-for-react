/**
 * @fileOverview 缩略图
 * @author huangtonger@aliyun.com
 */
const G6 = require('g6-for-react').G6;
const Minimap = require('./minimap');

class Plugin {
  constructor(options) {
    this.options = options;
  }
  init() {
    const graph = this.graph;
    const minimap = new Minimap(Object.assign({
      getGraph() {
        return graph;
      }
    }, this.options));
    graph.on('afterchange', () => {
      minimap.renderBackground();
      minimap.renderViewPort();
    });
    graph.on('afterlayout', () => {
      minimap.renderBackground();
      minimap.renderViewPort();
    });
    graph.on('afterviewportchange', () => {
      minimap.renderViewPort();
    });
    this.renderBackground = () => {
      minimap.renderBackground();
    };
    this.renderViewPort = () => {
      minimap.renderViewPort();
    };
    this.minimap = minimap;
  }
  destroy() {
    this.minimap.destroy();
  }
}

G6.Plugins['tool.minimap'] = Plugin;

module.exports = Plugin;
