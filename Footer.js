class ListFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
  
    var clearButton = null;
    if(this.props.completedNumber > 0) {
      clearButton = (
      <button className="clear-completed" onClick={this.props.handleClear}>
          Clear Completed
      </button>
      );
    }
    
    return (
        <div className="list-footer">
            {
              (this.props.activeNumber > 1) ? <p id="todo-number-display">  {this.props.activeNumber} items left</p> : <p id="todo-number-display"> {this.props.activeNumber} item left</p> 
            }
          
            <a href="#" onClick={() => this.props.handleAll()}>All</a>
            <a href="#" onClick={() => this.props.handleClick()}>Active</a>
            <a href="#" onClick={() => this.props.handleComplete()}>Completed</a>
            {clearButton}
        </div>
  
    );
  }
}

