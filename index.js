var React = require('react');
var ReactDOM = require('react-dom');

var totalcards = 0;
var totallists = 0;
var totalboards = 0;

var Card = function(props) {
    return (
        <div className="card">
        {props.text}
    </div>
    )
}

var List = function(props) {
    return (
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
        <form>
            <input type="text"></input>
        </form>
    </div>
    </div>
    );
};

var Board = function(props) {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(<List/>)
    };

    return (
        <div className= "board">
    {props.title}
        <div>
        {props.lists}
            <div>
                <List title="List Title 1" cards={arr}/>
                <List title="List Title 2"/>
            </div>
        </div>
    </div>
    )
};

var App = function(props) {
    var arr = []

    for (var i = 0; i < 3; i++) {
        arr.push(<List/>);
    }

    return (
        <div>
    {arr}
    <Board title="another board" lists={arr}/>
    </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('app'));
});