import React, { Component } from "react";
import "./mainPage.css";
import { Button, Form, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import TaskManager from "./taskManager.jsx"

class mainPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.resetTasks = this.resetTasks.bind(this);


  }

  addTask(e) {
    if (this._inputElement.value !== "") {
      let newTask = {
        key: Date.now(),
        task: this._inputElement.value,

      };
      this.setState((pS) => {
        return {
          tasks: pS.tasks.concat(newTask)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.tasks);
    e.preventDefault();
  }

  deleteTask(key) {
    console.log("Delete clicked");
    let updatedTasks = this.state.tasks.filter((task) => {
      return (task.key !== key)
    })
    this.setState({ tasks: updatedTasks })
  }

  resetTasks() {
    let newTasks = this.state.tasks.filter((task) => {
      return (task.key === -1)
    })
    this.setState({ tasks: newTasks })
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="container">
              <h1>TO-DO LIST</h1>

        <h3>Dedication is the path to success.</h3>
        <h4>
          Add your tasks you wish to complete in order to keep track of your progress and your
          pending tasks.
        </h4>
        <Form id="form" onSubmit={this.addTask}>
          <Input
            innerRef={(a) => this._inputElement = a}
            placeholder="Enter your task"></Input>
          

          <Button color="primary" id="form" type="submit">
            Add task
          </Button>
          <Button id="reset" onClick={this.resetTasks} color='danger'>Reset Tasks</Button>
        </Form>
        <TaskManager entries={this.state.tasks}
          delete={this.deleteTask} />
      </div>
    );
  }
}

export default mainPage;
