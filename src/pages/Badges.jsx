import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader"
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.setIntervalId = setInterval(this.fetchData, 3000);
    console.log(this.setIntervalId )
  }

  componentWillUnmount(){
    console.log('cancelado')
    clearInterval(this.setIntervalId)
  }
 fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      //(data);
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }
  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      // console.log(this.state.error);
      return <PageError error={this.state.error} />;
    }

    // console.log("2/4 render");
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Cont-logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container ">
          <div className="Badges__buttons container">
            <Link
              to="/badges/new"
              className="btn btn-primary btn-lg "
              // onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList Badges={this.state.data} />
              {this.state.loading && <MiniLoader className="text-center"/>}
            </div>
          </div>
        </div>
        
      </>
    );
  }
}

export default Badges;
