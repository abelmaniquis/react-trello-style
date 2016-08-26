var React = require('react');
var ReactDOM = require('react-dom');


var Card = React.createClass ({
    getInitialState: function(){
        
    },
    render: function(){
    return (
        <div className="card">
            <div className="card-name">{this.props.title}</div>
            <div className="card-content">{this.props.text}</div>
        </div>
    )}
});

var List = React.createClass({
    onAddSubmit: function(event){
        event.preventDefault();
        console.log('onAddSubmit called');
    },
    onChange: function(event) {
        event.preventDefault();
        console.log('onChange called');
    },

    render: function(props) {
        var cardList = [];
        for (var i=0; i<3; i++) {
            cardList.push(<Card text={'card text' + i}/>)
        }
        return (
            <div className='cardList'>
                <div className='list-title'>{this.props.title}</div>
                <div className='list-cards'>{cardList}</div>
                <form onSubmit={this.onAddSubmit}>
                    <input type='text' onChange={this.onChange}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
});

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            cards: [],
        };
    },
    render: function(){
        return(
            <div>
            <List/>
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
        <Board title= "BOOOOAAAAARRRDDDDDD!!!!!!"/>
        <List title="effing list">
        </List>
        <Card title="I am a card" text="Can you see me?"/>
        </div>, document.getElementById('app'));
});