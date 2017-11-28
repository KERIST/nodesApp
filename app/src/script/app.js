import React from 'react';
import ReactDOM from 'react-dom';

require('../style/styles.scss');

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

class NodesEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="nodesApp__editor">
            <input type="text" ref={(input) => { this.textInput = input }} className="nodesApp__input" placeholder="text" />
            <input type="text" ref={(input) => { this.colorInput = input }} className="nodesApp__input" placeholder="color" />
            <button onClick={() => {this.props.onBtnclick(this.textInput.value, this.colorInput.value); this.textInput.value = ''; this.colorInput.value = ''; }} className="nodesApp__btn" >add</button>
        </div>;
    }
}

class NodesApp extends React.Component {
    constructor(props) {
        super(props);
        this.nodes = JSON.parse(localStorage.getItem('nodesApp') ? localStorage.getItem('nodesApp') : '[]');
        this.state = { nodes: this.nodes};

        this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
        this.handleDelBtnClick = this.handleDelBtnClick.bind(this);
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

    render() {
        return <div className="nodeApp">
            <NodesEditor onBtnclick={this.handleAddBtnClick}/>
            <NodesContainer nodes={this.state.nodes} onDelBtnClick={this.handleDelBtnClick}/>
        </div>;
    }
}

ReactDOM.render(<NodesApp />, document.querySelector('#app'));

