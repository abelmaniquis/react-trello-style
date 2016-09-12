var React = require('react');

var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../index');
var List = require('../index');
var Board = require('../index');

describe('Trello Cards', function() {
  it('renders cards', function() {
    var renderer = TestUtils.createRenderer();
    //renderer.render(<Card/>);
    //var result = renderer.getRenderOutput();
  });
});
/*
describe('Trello Lists', function() {
  it('Renders Lists', function() {
    var card = ['first card', 'second card', 'third card'];

    var renderer = TestUtils.createRenderer();
    renderer.render(<List list={card}/>);
    var result = renderer.getRenderOutput();
    var list = result.props.children;
    console.log('what is result', result);
    console.log('what is in result.props', result.props);
    console.log('what is in this list', list);
    console.log('what is in list[1]', list[1].props);
  });
});

describe('Board portion of Trello', function() {
  it('show the board properly', function() {
    var list = ['this is a test'];
    var boardTitle = 'Trello Board';

    var renderer = TestUtils.createRenderer();
    renderer.render(<Board boardTitle={boardTitle} board={list}/>);
    var result = renderer.getRenderOutput();
    var board = result.props.children;

    result.props.className.should.equal('board');
    result.props.children[0].should.equal('Trello Board');
    result.props.children[1].should.be.instanceOf(Array);
  });
});
*/