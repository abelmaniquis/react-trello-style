var React = require('react');
var ReactDOM = require('react-dom');

var i = 1;

var Card = function(props){
    return(
    <div className="card">
        {props.text}
        <div className="test">
        {i += 1}
        </div>
    </div>
    )
}

var List = function(props){
    return(
    <div className = "list-title">
        {props.title}
    <div>
        {props.cards}
        <div>    
            <Card text="card text 1"/>
            <Card text="card text 2"/>
            <Card text="card text 3"/>
            <Card text="card text 4"/>
        </div>
    </div>
    </div>
    );
};

var Board = function(props){
    return(
    <div className= "board-title">
    {props.lists}
        <div>
            <List title="List Title 1" cards="cards should somehow go here."/>
            <List title="List Title 2"/>
        </div>
    </div>
    )
};

var App = function(props){
    return(
    <div>
    <Board lists="Lists should go in here"/>
    </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('app'));
});