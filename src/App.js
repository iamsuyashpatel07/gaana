import React from "react";
import CenterImage from "./CenterImage";
import Waveform from "./Waveform";
import Details1 from "./Detail1";

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
    this.setState({
      person: data.data.celebration.template_url,
      loading: false,
    });
    // console.log(this.state.person);
  }
  render() {
    if (this.state.loading) {
      return <div> loading... </div>;
    }

    if (!this.state.person) {
      return <div> didn 't get a person</div>;
    }

    return (
      <div style={{ height: "50vh !important" }}>
        <center>
          <div
            style={{
              backgroundImage: "url(" + this.state.person + ")",
            }}
            className="firstImage"
          >
            <h1> Public Test </h1> <p> Cheer Text </p> <CenterImage />
            <Waveform />
            <Details1 />
          </div>
        </center>
      </div>
    );
  }
}
