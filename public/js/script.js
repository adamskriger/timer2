
const App = React.createClass({

  getInitialState : function(){
      return {
        status : "Press A Button"

      }
    },


    increase    :      function(){
      this.state.status = "You Pressed Increase"
      this.setState({ status: this.state.status})
      console.log("Increase");
  },

  decrease    :      function(){
    this.state.status = "You Pressed Decrease"
    this.setState({ status: this.state.status})
    console.log("decrease");
  },

  pause    :      function(){
    this.state.status = "You Pressed pause"
    this.setState({ status: this.state.status})
    console.log("pause");
  },


  render : function(){

    return (
      <div>
      <h1>App Container</h1>
      <Display status={this.state.status} />
      <Button action={this.increase} name={"increase"}/>
      <Button action={this.decrease} name={"decrease"}/>
      <Button action={this.pause} name={"Pause"}/>

      </div>
    )
  }
})


const Display = React.createClass({



  render : function(){

    return (
      <div>
      <h1>{this.props.status}</h1>

      </div>
    )
  }
})


const Button = React.createClass({



  render : function(){

    return (
      <div>
      <button onClick={this.props.action}>{this.props.name}</button>

      </div>
    )
  }
})


















ReactDOM.render(<App />, document.querySelector('#container'));
