import { Card, CardHeader } from 'reactstrap';

import React from 'react';
import TableBorderedExample from '../examples/TableBordered';
import TableBorderlessExample from '../examples/TableBorderless';
import TableDarkExample from '../examples/TableDark';
import TableExample from '../examples/Table';
import TableHoverExample from '../examples/TableHover';
import TableResponsiveExample from '../examples/TableResponsive';
import TableSizingExample from '../examples/TableSizing';
import TableStripedExample from '../examples/TableStriped';

export default class TablesPage extends React.Component {
  render() {
    return (
      <>
        <Card className="mb-3">
          <CardHeader>Basic table</CardHeader>
          <TableExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Dark table</CardHeader>
          <TableDarkExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Striped rows</CardHeader>
          <TableStripedExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Bordered table</CardHeader>
          <TableBorderedExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Borderless table</CardHeader>
          <TableBorderlessExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Hoverable table</CardHeader>
          <TableHoverExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Small table</CardHeader>
          <TableSizingExample />
        </Card>

        <Card className="mb-3">
          <CardHeader>Responsive table</CardHeader>
          <TableResponsiveExample />
        </Card>
      </>
    );
  }
}
