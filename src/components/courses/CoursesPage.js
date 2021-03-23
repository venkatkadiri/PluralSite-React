import React from "react";

class CoursesPage extends React.Component {
  state = {
    courses: {
      title: "",
    },
  };

  handleChange = (e) => {
    const courses = { ...this.state.courses, title: e.target.value };
    this.setState({ courses: courses });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.courses.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Courses</h1>
        <h3>Add Courses</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.courses.title}
        />
        <input type="submit" value="save" />
      </form>
    );
  }
}
export default CoursesPage;
