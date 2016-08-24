var React = require('react');
var ReactDOM = require('react-dom');


var Card = function(props) {
    return (
        <div className="card">
            <div className="card-name">{props.title}</div>
            <div className="card-content">{props.text}</div>
        </div>
    );
};

var List = function(props) {

    var onChange = function(props) {
        console.log(props);
        onAddInputChanged(props);
        console.log("onChange function called");
    }

    var onAddSubmit = function(props) {
        console.log("onAddSubmit called");
    }

    var onAddInputChanged = function() {
        console.log("onAddInputChanged called");
    }


    var cardArray = [];
    for (var i = 0; i < 4; i++) {
        console.log(props);
        cardArray.push(<Card text={"card text" + ": " + (i + 1)} title={"content of card" + ": " + (i + 1)}/>)
    }
    return (
        <div className = "list">
            <div className="card-title">{props.title}</div>
            <div className = "cards-prop">{props.cards}</div>
            <div className = "card-array">{cardArray}</div>
            <form onSubmit={onAddSubmit(props)}>
                <input type="text" onChange={onChange(props)}/>
                <button type="submit">Submit</button>
            </form>
    </div>
    );
};

var ListContainer = React.createClass({
    getInitialState: function() {
        console.log("getInitialState");
        console.log(this);
        return {
            text: '',
            cards: [],
        };
    },
    render: function(){
        return(
            <div>
            <List cards = {"TEST TEST TEST TEST"}/>
            <List/>
            </div>
            )
    }
});

var Board = function(props) {
    var listarr = [];
    for (var i = 0; i < 3; i++) {
        listarr.push(<List title={"list" + ": " + (i + 1)}/>)
        listarr.push(<ListContainer/>);
    };
    return (
        <div className="board">
    {props.title}
        <div>
        {props.lists}
            <div>
              {listarr}
            </div>
        </div>
    </div>
    )
};



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <div>
        <ListContainer/>
        </div>, document.getElementById('app'));
});