import React from "react";
import { Cell, Column, Table } from "@blueprintjs/table";

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch
} from "@blueprintjs/core";
import {
  Example,
  handleBooleanChange,
  IExampleProps
} from "@blueprintjs/docs-theme";

const cellRenderer = (rowIndex: number) => {
  return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
};

const options = (
  <>
    <H5>Props</H5>
    <Switch
      checked={true}
      label="Align right"
      onChange={() => console.log("change")}
    />
  </>
);

const TableBody = () => {
  return null;
  // return (
  // 	<Example options={options}>
  // 		<Navbar>
  // 			<NavbarGroup align={"right"}>
  // 				<NavbarHeading>Blueprint</NavbarHeading>
  // 				<NavbarDivider />
  // 				<Button className={Classes.MINIMAL} icon="home" text="Home" />
  // 				<Button className={Classes.MINIMAL} icon="document" text="Files" />
  // 			</NavbarGroup>
  // 		</Navbar>
  // 	</Example>
  // );
};

export default TableBody;
