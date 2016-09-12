var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    getInitialState: function() {
        return {
            editing: false
        }
    },
    edit: function() {
        this.setState({editing: true});
    },
    remove: function() {
        this.props.deleteFromList(this.props.index)
        
    },
    save: function() {
        this.props.updateCardText(this.refs.newText.value,this.props.index)
        this.setState({editing: false});
    },
    renderNormal: function() {
        return (
            <div className="cardContainer">
        <div className="cardText">{this.props.children}</div>
        <button onClick={this.edit} className='button-primary'>Edit</button>
        <button onClick={this.remove} className='button-danger'>Remove</button>
       </div>)
    },
    renderForm: function() {
        return (
            <div className="cardContainer">
        <textarea ref='newText' defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className='button-success'>Save</button>
       </div>)
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderNormal();
        }
    }
});

var List = React.createClass({
    getInitialState: function(){
        return{
            cards:[
            'card1', 
            'card2',
            "card3",
            "card4"
            ]};
    },
    addCard: function(i){
        var arr = this.state.cards;
        arr.push(['This is a new card']);
        this.setState({Cards:arr});
    },
    
    removeCard: function(i){
        var arr = this.state.cards;
        arr.splice(i,1);
        
        this.setState({Cards:arr})
    },
    
    updateCard: function(newText,i){
        console.log("from List.updateCard");
        var arr= this.state.cards;
        arr[i] = newText;
        console.log(newText);
        this.setState({Cards:arr});
    },
    eachCard: function(text,i){
        return(
        <Card key ={i} index={i} updateCardText={this.updateCard} deleteFromList={this.removeCard}>
        {text}
        </Card>);
    },
    render: function(){
        return(
            <div className="list">
                {this.state.cards.map(this.eachCard)}
                <button onClick ={this.addCard}>Add Card</button>
            </div> 
        );
    }
    
    
});

var Board = React.createClass({
    getInitialState: function(){
        return{boards:['board1','board2','board3']};    
    },
    render: function(){
       return(
       <div className="board">
        <List/>
        <List/>
        <List/>
       </div>
       );
   }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <div>
        <Board/>
        <Board/>
        <Board/>
        </div>, document.getElementById('app'));
});