var React = require('react');
var Card = require('./Card');

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

module.exports = List;