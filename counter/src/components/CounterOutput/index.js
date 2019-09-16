import React, { Component } from "react";
import { styles } from "./styles";
import { connect } from "react-redux";

class CounterOutput extends Component {
  render() {
    return (
      <div style={styles.counterOutput}>
        Result : {this.props.result}
        <button
          onClick={this.props.augmenterHistorique}
          style={{ "margin-left": "30px" }}
        >
          Créer historique
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    augmenterHistorique: () =>
      dispatch({
        type: "CREER_HISTORIQUE"
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CounterOutput);
