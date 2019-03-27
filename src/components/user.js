import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.user.name} ({this.props.user.email})
        </div>
      </div>
    );
  }
}

export default User;
