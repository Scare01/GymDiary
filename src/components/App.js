import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import User from "./user";

let GET_USER_QUERY = gql`
  query {
    getUsers {
      name
      email
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Query query={GET_USER_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return `Loading...`;
            if (error) return `Error!: ${error}`;

            return (
              <div>
                {data.getUsers.map(user => (
                  <User key={user.id} user={user} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
