import React from 'react';

class Node extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="nodesApp__node" ref={(item) => {this.container = item}} data-id={this.props.itemid} style = {{backgroundColor: this.props.color}}>
            <button className="nodesApp__del" onClick={() => {this.props.onDelBtnClick(this.container.dataset.id)}}></button>
            <span className="nodesApp__text">{this.props.text}</span>
        </div>
    }
}

module.exports = Node;