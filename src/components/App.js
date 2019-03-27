import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import User from "./user";

let GET_USER_QUERY = gql`
  query {
    getUser(name: String) {
      name
      email
    }
  }
`;

class App extends React.Component {
  state = {
    name: "",
    prepareName: ""
  };

  Login = () => {
    this.setState({ name: this.state.prepareName });
  };

  render() {
    return !this.state.name ? (
      <div>
        <h1>Loggin page</h1>
        <input
          placeholder="enter name..."
          onChange={e => this.setState({ prepareName: e.target.value })}
        />
        <button onClick={this.Login}>Login</button>
      </div>
    ) : (
      <div>
        <Query query={GET_USER_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return `Loading...`;
            if (error) return `Error!: ${error}`;

            return (
              <div>
                <p>Welcome back {data.user.name}</p>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
