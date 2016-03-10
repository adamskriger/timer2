

const App = React.createClass({

  getInitialState : function(){
      return {
        tasks : []

      }
    },

    alterState : function(event){
      event.preventDefault();

          var toSet = [];
          toSet.push(this.refs.name.value)
          console.log(toSet);

          this.state.tasks = toSet
          this.setState({tasks: this.state.tasks})
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

    return (
      <div>

 <p>{Object.keys(this.props.tasks)}
 </p>


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
