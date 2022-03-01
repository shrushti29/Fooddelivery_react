//rfcreduxp
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

//   why we took alerts here
//   alerts will bring the array
export const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg};
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
