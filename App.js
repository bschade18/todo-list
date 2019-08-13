
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: '',
      todoCount: 0,
      active: false,
      complete: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.handleAll = this.handleAll.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
  }
 
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
 
 handleSubmit() {
     event.preventDefault();
      var todos = this.state.todos;
      todos.push(
        {text: this.refs.newText.value,
         completed: false,
         id: 1
        });
      this.setState({
        todos: todos,
        value: '',
        todoCount: this.state.todoCount + 1
      });
    }
  
  handleClick(text) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.text === text) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
  
  handleActive() {
    this.setState({
      active: true,
      complete: false
    })
  }
  
  handleAll() {
    this.setState({
      complete: false,
      active: false
    })
  }
  
  handleComplete() {
    this.setState({
      complete: true,
      active: false
    })
  }
  
  clearComplete() {
    let clearData = this.state.todos.filter((todo) => { 
     return (todo.completed === false)});  
    this.setState({
      todos: clearData
    })
  }
 
  
  render() {
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
   
    const activeItemsData = this.state.todos.filter((todo) => { 
    return (todo.completed === false)});   
    const activeItems = activeItemsData.map((todo) => {
      return (
      <label className="container">
        <p style={todo.completed ? completedStyle: null}>{todo.text}</p>
        <input 
          type="checkbox" 
          onChange={() => this.handleClick(todo.text)} 
          checked={todo.completed} 
        />
        <span className="checkmark"></span>
     </label>);
    });
    
    const completeItemsData = this.state.todos.filter((todo) => { 
    return (todo.completed === true)});   
    const completeItems = completeItemsData.map((todo) => {
      return (
      <label className="container">
        <p style={todo.completed ? completedStyle: null}>{todo.text}</p>
        <input 
          type="checkbox" 
          onChange={() => this.handleClick(todo.text)} 
          checked={todo.completed}
        />
       <span className="checkmark"></span>
     </label>);
    });
   
    
    const todoItems = this.state.todos.map((todo) =>
      <label className="container">
        <p style={todo.completed ? completedStyle: null}>{todo.text}</p>
        <input 
          type="checkbox" 
          onChange={() => this.handleClick(todo.text)} 
          checked={todo.completed} />
        <span className="checkmark"></span>
     </label>);
                                              
                                     
    return (
       <div className="list">
        <h1 className="title">todos</h1>
              <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    id="todo-input"
                    type="text" 
                    ref="newText" 
                    placeholder="What needs to be done?"
                    onChange={this.handleChange}
                    value={this.state.value}/>
                <button 
                    type="submit" 
                    className="submit-button">Add
                </button>
              </form>     
      {
        (this.state.active) ? activeItems : (this.state.complete) ? completeItems : todoItems                   
      }                                              
                         {
                (this.state.todos.length > 0) ? <ListFooter activeNumber={activeItemsData.length} completedNumber={completeItemsData.length} handleClick={() => this.handleActive()} handleAll={() => this.handleAll()} handleComplete={() => this.handleComplete()} handleClear={this.clearComplete}/> : null
                          }      
                                        
            </div>
    );
  }
};

