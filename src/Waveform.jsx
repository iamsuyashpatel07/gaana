import React from "react";
import Top from "./Top";
import Music from "./music.mp3";
export default class App extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url =
      "https://cheersat7.herokuapp.com/api/v1/celebration/get-by-id/60e6303edcfdc80015081c2f";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.data.celebration.cheer_url, loading: false });
    console.log("sending data to Top.jsx " + this.state.person);
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div> didn 't get a person</div>;
    }

    return (
      <div>
        <Top url={Music} uri={this.state.person} />
      </div>
    );
  }
}
