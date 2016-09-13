const React = require('react')
const ReactDOM = require('react-dom');

const Card = React.createClass({
    getInitialState(){
        return{
        editing: false
        }
    },
    edit(){
        this.setState({editing: true});
    },
    remove() {
        this.props.deleteFromList(this.props.index)
        
    },
    save() {
        this.props.updateCardText(this.refs.newText.value,this.props.index)
        this.setState({editing: false});
    },
    renderNormal() {
        return (
            <div className="cardContainer">
        <div className="cardText">{this.props.children}</div>
        <button onClick={this.edit} className='button-primary'>Edit</button>
        <button onClick={this.remove} className='button-danger'>Remove</button>
       </div>)
    },
    renderForm() {
        return (
            <div className="cardContainer">
        <textarea ref='newText' defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className='button-success'>Save</button>
       </div>)
    },
    render() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderNormal();
        }
    }
});

module.exports = Card;