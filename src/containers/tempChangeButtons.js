import { connect } from "react-redux";
import TempChangeButtons from "../components/TempChangeButtons";
import { updateTempUnit } from "../data/actions";

const mapStateToProps = state => ({
  tempUnit: state.get("tempUnit")
});

const mapDispatchToProps = dispatch => ({
  handleChange: (e, value) => dispatch(updateTempUnit(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TempChangeButtons);
