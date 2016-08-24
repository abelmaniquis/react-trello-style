var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
   getInitialState: function(){
       return{
           color: true
       }
   },
   onClick: function(){
       this.setState({
           color: !this.state.color
       });
   },
   render: function(){
       var classes = 'card' + (this.state.color ? 'color' : '');
       return(
        <div className={classes} onClick={this.onClick}>
            <div className="card-name">{this.props.name}</div>
            <div classNamt="card-content">
            {this.props.text}
            </div>
        </div>
        );
   }
});

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

var onSubmit = function(e){
    e.preventDefault()
}

var onAddSubmit = function(){
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <div>
        <Board title={"board"}/>
        <Board title={"another board"}/>
        </div>
    , document.getElementById('app'));
});