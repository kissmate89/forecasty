import { connect } from "react-redux";
import CardList from "../components/CardList";

const mapStateToProps = state => ({
  weatherData: state.get("weatherData"),
  tempUnit: state.get("tempUnit")
});

export default connect(
  mapStateToProps,
  {}
)(CardList);
