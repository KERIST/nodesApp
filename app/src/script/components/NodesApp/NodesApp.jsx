import React from 'react';
var NodesEditor = require('./NodesEditor.jsx');
var NodesContainer = require('./NodesContainer.jsx');

class NodesApp extends React.Component {
    constructor(props) {
        super(props);
        this.nodes = JSON.parse(localStorage.getItem('nodesApp') ? localStorage.getItem('nodesApp') : '[]');
        this.state = { nodes: this.nodes};

        this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
        this.handleDelBtnClick = this.handleDelBtnClick.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    componentDidUpdate(){
        this.updateLocalStorage();
    }

    updateLocalStorage(){
        localStorage.setItem('nodesApp', JSON.stringify(this.nodes));                
    }

    addNode(node) {
        this.nodes.unshift(node);
        this.setState({nodes: this.nodes});
    }

    deleteNode(id){
        let itemId = this.nodes.length - id - 1;
        this.nodes.splice(itemId, 1);
        this.setState({nodes: this.nodes}); 
    }

    handleDelBtnClick(id){
        this.deleteNode(id);
    }

    handleAddBtnClick(text, color) {
        let id = this.nodes[0] ? this.nodes[0].id + 1 : 0,
            node = { id: id, text: text, color: color };
        this.addNode(node);
    }

    handleSearchInputChange(text){
        let filterArr = this.nodes.filter((value) => {return ~value.text.indexOf(text)});
        this.setState({nodes: filterArr});
    }

    render() {
        return <div className="nodeApp">
            <NodesEditor onBtnclick={this.handleAddBtnClick} onSearchChange={this.handleSearchInputChange}/>
            <NodesContainer nodes={this.state.nodes} onDelBtnClick={this.handleDelBtnClick} />
        </div>;
    }
}

module.exports = NodesApp;