var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
        return (
            <div className="card">
            {props.text}
            </div>
    )
}

var List = function(props){
    var cardArray = [];
    for (var i = 0; i < 4; i++) {
        cardArray.push(<Card text={"card text" + ": " + (i + 1)}/>)
    }
    return (
    <div className = "list">
        {props.title}
        <div>    
           {cardArray}
        </div>
        <div className="form">
        {props.cards}
            <form>
               <input type="text" onChange= "onAddInputChange()"/>
               <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    );
};

var Board = function(props) {
    var listarr = [];
    for (var i = 0; i < 3; i++) {
        listarr.push(<List title={"list" + ": " + (i + 1)}/>)
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

var onAddInputChanged = function() {
    
}

var onAddSubmit = function(){
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title={"board"}/>, document.getElementById('app'));
});