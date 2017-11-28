import React from 'react';

class NodesEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="nodesApp__editor">
            <div className="nodesApp__addition-field">
                <input type="text" ref={(input) => { this.textInput = input }} className="nodesApp__input" placeholder="text" />
                <input type="text" ref={(input) => { this.colorInput = input }} className="nodesApp__input" placeholder="color" />
                <button onClick={() => { this.props.onBtnclick(this.textInput.value, this.colorInput.value); this.textInput.value = ''; this.colorInput.value = ''; }} className="nodesApp__btn" >add</button>
            </div>
            <input onChange={() => { this.props.onSearchChange(this.searchInput.value) }} type="text" ref={(input) => { this.searchInput = input }} className="nodesApp__input nodesApp__input_search" placeholder="search" />
        </div>;
    }
}

module.exports = NodesEditor;