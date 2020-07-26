import React from "react";

import PageLoading from "../components/PageLoading";
import api from "../api";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    console.log("me estoy ejecutando");

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  handelOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handelCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  handelDelete = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const badge = this.state.data;
    console.log(this.state);
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails
        onOpenModal={this.handelOpenModal}
        onCloseModal={this.handelCloseModal}
        badge={this.state.data}
        isOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handelDelete}
      />
    );
  }
}

export default BadgeDetailsContainer;
