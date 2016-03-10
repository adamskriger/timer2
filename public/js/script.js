

const App = React.createClass({

  getInitialState : function(){
      return {
        tasks : {}

      }
    },

    createTask : function(singleTask){
      var timestamp = (new Date()).getTime();


      this.state.tasks ['... ' + this.refs.name.value + ':'  + ' ' + timestamp + ' ' ] = singleTask
      this.setState({tasks : this.state.tasks})


    },
    alterState : function(event){
      event.preventDefault();

          var task= {
            name : this.refs.name.value
          }

          this.createTask(task)
          this.refs.form.reset();

          console.log("clicked");
    },



    render : function(){

      return (
<div>
        <Tasklist tasks={this.state.tasks} />


        <form ref="form" onSubmit={this.alterState}>
              <input type="text" ref="name" placeholder="Task"/>
              <button>Add Task</button>

        </form>

</div>
      )
    }

})

const Tasklist = React.createClass({



  render : function(){
    console.log("this dot props dot tasks", this.props.tasks);

    return (
      <div>

 <p> { Object.keys(this.props.tasks) } </p>

    </div>



    )
  }
})


const Task = React.createClass({



  render : function(){

    return (
      <div>
    <p>Single Task</p>

    </div>


    )
  }
})






const Form = React.createClass({



  render : function(){

    return (
      <div>


      </div>
    )
  }
})



ReactDOM.render(<App />, document.querySelector('#container'));
