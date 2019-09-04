import React from "react";
import { getAsks } from "state/ask";
import { connect } from "react-redux";
import { Columns, Section } from "react-bulma-components";

import Ask from "../Ask";

export const Asks = ({ asks }) => {
  return (
    <Section className="asks">
      <Columns>
        {asks.map(ask => (
          <Ask key={ask.id} {...ask} />
        ))}
      </Columns>
    </Section>
  );
};

const mapStateToProps = state => {
  return { asks: getAsks(state.asks) };
};

export default connect(mapStateToProps)(Asks);
