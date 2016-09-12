# react-trello-style





ASSIGNMENT 2 NOTES:
-----------------------------------------------------------
PROPS are attributes to a component which work like HTML attributes




var React = require('react');
var ReactDOM = require('react-dom');

var Person = function(props) {
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>                     //person attribute is given a name prop
            <img className="person-img" src={props.imageUrl} />                 //name, imageurl and job are pulled from the props argument which is passed into the component
            <div className="person-job">                                        
                {props.job}
            </div>
        </div>
    );
};

var PersonList = function() {
    return (
        <div className="person-list">                                                   // name, imageurl and job are passed on to the individual Persons in the PersonList component
            <Person name="Derek Zoolander"                                              //
                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
};


STATE:
The state is an object


ASSIGNMENT 2 EXERCISE:
-------------------------------------------------------------
Exercise: Add props to your components
Take your three Trello components and add props which allow you to customize the contents of them.

Your Board component should take:

A title prop which contains the title of the board.
A lists prop which contains an array of the titles of the board's lists.
Your List component should take:

A title prop which contains the title of the list.
A cards prop which contains the contents of the cards.
Your Card component should take:

A text prop which contains the content of the card
Test this out by rendering a board which contains multiple lists, and a list which contains multiple cards.
-----------------------------
MY CODE:
var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props){
    return(
        /*
        Card component should take a text prop
        which contains the content of the card
        */
    <div className = "card">
    <div className = "card-content">{props.text}</div>
    <div className = "card-name">{props.content}</div>
    </div>
    )
}

var List = function(props){
    /*
    List component should take:
        A title prop which contains the title of the list
        A cards prop which contains the contents of the cards
    */
    return(
        <div className ="title">{props.title}
            <div className="list">
                <Card text="card text 1"
                    content="This is what the first card contains"/>
                <Card text="card text 2"
                    content="This is what the second card contains"/>
                <Card text="card text 3"
                    content="This is what the third card contains"/>
            </div>
        </div>
    );
};

//Should have a title prop which contains the title of the board
//Should have a lists prop which contains an array of the titles of the board's lists
var Board = function(props){
    return(
        <div className="board">
                <List title="List Title 1"/>
                <List title="List Title 2"/>
                <List title="List Title 3"/>
        </div>
        )
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board/>, document.getElementById('app'));
});




ASSIGNMENT 3 NOTES
-------------------------------------------------------------------------------------
In the previous assignment, you used props to pass data from a parent component to a child component.

Callbacks allow us to pass data in the other direction, so a child element can tell its parent that it has been used



var React = require('react');
var ReactDOM = require('react-dom');

var SoundCloudEmbed = function(props) {                                                             //SoundCloudEmbed component takes a trackID as a prop, it is passed from the parent soundcloud component to the child
    var playerUrl = 'https://w.soundcloud.com/player/';
    var trackUrl = 'https://api.soundcloud.com/tracks/' + props.trackId;
    var options = 'auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true';
    var src = playerUrl + '?url=' + trackUrl + '&' + options;
    return <iframe width="100%" height="450" scrolling="no" frameborder="no" src={src}></iframe>;                           //SoundCloudEmbed returns an <iframe> which will embed a soundcloud song
};
                                                                                                                       
var Button = function(props) {                                                  //Button component renders the button element
    return <button onClick={props.onClick}>{props.text}</button>;               //onClick handler is set to be equal to props.onClick
};                                                                              //If the component is given a prop called onClick, then that will be called when the function is clicked

var Surprise = React.createClass({                                              //Surprise component: When the button is rendered,Surprise passes this.onButtonClick as the OnClick prop          
    getInitialState: function() {                                               //When the button is clicked, the onButtonClicked method of Surprise will be called.    
        return {                                                                
            clicked: false
        };
    },
    onButtonClick: function() {                                                 //In the onButtonClick callback, the clicked state is changed to true
        this.setState({                                                         //This triggers a rerender, meaning that the SoundCloud embed component is now displayed
            clicked: true
        });
    },
    render: function() {
        return (
            <div>
                <Button onClick={this.onButtonClick} text="Ready to be amazed?" />
                {this.state.clicked ? <SoundCloudEmbed trackId="191075550" /> : null}
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Surprise />, document.getElementById('app'));
});


ASSIGNMENT 3 EXERCISE:
-----------------------------------------------------------------
Add a form containing a text input to the bottom of your Trello List component.

When the input's onChange event is fired, it should call an onAddInputChanged callback passed via the List's props.

Add a submit button to the form next to the text input.

When the form is submitted, it should run event.preventDefault(), then call an onAddSubmit callback passed via the List's props.

Pass an onAddInputChanged and an onAddSubmit callback to your List components.

In the callbacks, print a logging message to the console to make sure your callbacks are working. You'll implement the actual card adding functionality in the next lesson.


ASSIGNMENT 4 NOTES:
---------------------------------------------------------------------------------------------------
THINKING IN REACT

How do you go from a small project with few components
to a project with hundreds of components?

WHERE STATE SHOULD LIVE:
Where should state be stored in your component hierarchy?



var React = require('react');
var ReactDOM = require('react-dom');

var FlashCard = React.createClass({
    getInitialState: function() {
        return {
            english: 'Grapefruit',
            french: 'Pamplemousse',
            selected: 'english'
        }
    },

    onCardClick: function() {
        if (this.state.selected == 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else {
            if (this.state.selected == 'french') {
                this.setState({
                    selected: 'english'
                });
            }
        }
    },

    render: function() {
        var style = {
            border: '1px solid black',
            height: '100px',
            lineHeight: '100px',
            width: '300px',
            textAlign: 'center',
            fontSize: '2em'
        };
        return (
            <div onClick={this.onCardClick} style={style}>
                {this.state[this.state.selected]}
            </div>
        );
    }
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<FlashCard/>, document.getElementById('app'));
});

Some tests:

var React = require('react');

var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../index');
var List = require('../index');
var Board = require('../index');

describe('Card portion of Trello', function() {
  it('show the card or cards properly', function() {
    var text = 'this is a test';

    var renderer = TestUtils.createRenderer();
    renderer.render(<Card card={text}/>);
    var result = renderer.getRenderOutput();
  });
});

describe('List portion of Trello', function() {
  it('show the list properly', function() {
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




Original webpack config

var path = require('path');
var packageData = require('./package.json');
var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    resolve:{
        extensions: ['','.js','.jsx','.json']
    },
    devtool: 'source-map',
    module: {
        preloaders: [
            {
                test: /\.js$/,
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};