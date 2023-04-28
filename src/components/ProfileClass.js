import React from "react";
class Profile extends React.Component {
  render() {
    return (
      <div>
        <h2>This is a class based component</h2>
        <h3>Name:{this.props.name}</h3>
      </div>
    );
  }
}

export default Profile;
