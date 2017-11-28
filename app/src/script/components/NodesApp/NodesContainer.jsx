import React from 'react';
var Node = require('./Node.jsx');

class NodesContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        let nodes = this.props.nodes,
        me = this;
        return <div className="nodesApp__container">
            {
                nodes.map(function (value) {
                    return <Node text={value.text} key={value.id} itemid={value.id} onDelBtnClick={me.props.onDelBtnClick} color={value.color}/>;
                })
            }
        </div>
    }
}

module.exports = NodesContainer;