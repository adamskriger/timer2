
const App = React.createClass({

  getInitialState : function(){
      return {
        time : "Press A Button"

      }
    },


    increase    :      function(){
      this.state.time = "You Pressed Increase"
      this.setState({ time: this.state.time})
      console.log("Increase");
  },







  render : function(){

    return (
      <div>
      <h1>App Container</h1>
      <Display time={this.state.time} />
      <Button action={this.increase}/>
      </div>
    )
  }
})


const Display = React.createClass({



  render : function(){

    return (
      <div>
      <h1>{this.props.time}</h1>

      </div>
    )
  }
})


const Button = React.createClass({



  render : function(){

    return (
      <div>
      <button onClick={this.props.action}>increase</button>

      </div>
    )
  }
})


















ReactDOM.render(<App />, document.querySelector('#container'));
