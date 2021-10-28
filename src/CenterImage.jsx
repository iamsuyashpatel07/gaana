import React from "react";

export default class CenterImage extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://cheersat7.herokuapp.com/api/v1/celebration/get-by-id/60e6303edcfdc80015081c2f";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.data.celebration.media_url , loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <img className="center-image-padding" src={this.state.person} alt="" />
      </div>
    );
  }
}