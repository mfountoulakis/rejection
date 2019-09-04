import React from "react";
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
