const React = require('react')
const List = require('./List')
const Card = require('./Card')
const Board = React.createClass({
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

module.exports = Board;