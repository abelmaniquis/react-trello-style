var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props){
    return(
    <div className = "card">
    <div className = "card-name">{props.name}</div>
    {"This is a card"}
    </div>
    )
}

var List = function(){
    var cards = [];
    for(var i=0; i<4; i++){
        cards.push(<Card />)
    }
    return(
        <div className="the-cards">
        {cards}
        </div>
    );
};

//Should have a title prop which contains the title of the board
//Should have a lists prop which contains an array of the titles of the board's lists

var Board = function(props){
    
    var lists = [];
    for(var i=0; i<4; i++){
        lists.push(<List/>)
    }
    return (
        <div className="the-lists">
            {lists}
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});