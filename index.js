var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
        return (
            <div className="card">
            {props.text}
            </div>
    )
}

var onAddInputChanged = function() {
    console.log("onAddInputchanged called");
}

var onAddSubmit = function(){
    console.log("onAddSubmit called");
}

var List = function(props){

    var cardArray = [];
    for (var i = 0; i < 4; i++) {
        cardArray.push(<Card text="card text"/>)
    }

    return (
        <div className = "list">
        {props.title}
    <div>
            {props.cards}
        <div>    
           {cardArray}
        </div>
        <div className="form">
            <form>
               <input type="text"/>
               <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </div>
    );
};

var Board = function(props) {
    var listarr = [];
    for (var i = 0; i < 3; i++) {
        listarr.push(<List/>)
    };

    return (
    <div className="board">
    {props.title}
        <div>
        {props.lists}
            <div>
                <List title="List 1" cards={listarr}/>
                <List title="List 2" cards={listarr}/>
            </div>
        </div>
    </div>
    )
};

var App = function(props) {
    var arr = []

    for (var i = 0; i < 3; i++) {
        arr.push(<Board title="another board"/>);
    }

    return (
    <div>
    {arr}
    </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('app'));
});