const React = require('react')
const ReactDOM = require('react-dom')
const Card = require('./Card')
const List = require('./List')
const Board = require('./Board')

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <div>
        <Board/>
        <Board/>
        <Board/>
        </div>, document.getElementById('app'));
});