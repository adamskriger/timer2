const App = React.createClass({

  getInitialState : function(){
      return {
        status : "Press A Button"

      }
    },




  render : function(){

    return (
      <div>
      <h1>App Container</h1>
      <CreateTaskForm />
      </div>
    )
  }
})


const CreateTaskForm = React.createClass({

  addTask : function(event){

    event.preventDefault();

    var task = {firstfield: this.refs.createtaskinput.value}

    return (
      console.log(task)
    )
  },


  render : function(){

    return (
      <div>
      <h3>Go Ahead, Create A Task</h3>
      <form id ="createtaskform" ref="createtaskform" onSubmit={this.addTask}>

      <input ref="createtaskinput" type="text" placeholder="Enter Task"/>
      <button> Add Task </button>
      </form>
      </div>
    )
  }
})

const Button = React.createClass({




  render : function(){

    return (
      <div>
      <button type="submit" onClick={this.props.action}>{this.props.name}</button>

      </div>
    )
  }
})





ReactDOM.render(<App />, document.querySelector('#container'));
