import { connect } from "react-redux";
import App from "../components/App";
import { fetchWeatherData } from "../data/api";

const mapStateToProps = state => ({
  isLoading: state.get("isLoading")
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchWeatherData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
