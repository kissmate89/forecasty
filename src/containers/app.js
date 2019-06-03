import { connect } from "react-redux";
import App from "../components/App";
import { fetchTourData } from "../data/api";

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchTourData())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
