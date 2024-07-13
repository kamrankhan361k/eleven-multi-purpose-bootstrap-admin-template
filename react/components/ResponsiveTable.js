import { Table } from "reactstrap";

const ResponsiveTable = () => (
  <>
    <div className="card">
      <div className="card-header">Bootstrap option</div>
      <div className="card-body">
        <div className="table-responsive">
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Other browsers</td>
                <td>All others</td>
                <td>-</td>
                <td>-</td>
                <td>U</td>
              </tr>
              <tr>
                <td>Trident</td>
                <td>AOL browser (AOL desktop)</td>
                <td>Win XP</td>
                <td>6</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Camino 1.0</td>
                <td>OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Camino 1.5</td>
                <td>OSX.3+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Misc</td>
                <td>Dillo 0.8</td>
                <td>Embedded devices</td>
                <td>-</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Epiphany 2.20</td>
                <td>Gnome</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Firefox 1.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.7</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Firefox 1.5</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Firefox 2.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Gecko</td>
                <td>Firefox 3.0</td>
                <td>Win 2k+ / OSX.3+</td>
                <td>1.9</td>
                <td>A</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">No more tables</div>
      <div className="card-body">
        <div className="no-more-tables">
          <Table bordered striped>
            <thead>
              <tr>
                <th>Code</th>
                <th>Company</th>
                <th className="numeric">Price</th>
                <th className="numeric">Change</th>
                <th className="numeric">Change %</th>
                <th className="numeric">Open</th>
                <th className="numeric">High</th>
                <th className="numeric">Low</th>
                <th className="numeric">Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-title="Code">AAC</td>
                <td data-title="Company">
                  Australian Agricultural Company Limited
                </td>
                <td data-title="Price" className="numeric">
                  $1.38
                </td>
                <td data-title="Change" className="numeric">
                  -0.01
                </td>
                <td data-title="Change %" className="numeric">
                  -0.36%
                </td>
                <td data-title="Open" className="numeric">
                  $1.39
                </td>
                <td data-title="High" className="numeric">
                  $1.39
                </td>
                <td data-title="Low" className="numeric">
                  $1.38
                </td>
                <td data-title="Volume" className="numeric">
                  9,395
                </td>
              </tr>
              <tr>
                <td data-title="Code">AAD</td>
                <td data-title="Company">Ardent Leisure Group</td>
                <td data-title="Price" className="numeric">
                  $1.15
                </td>
                <td data-title="Change" className="numeric">
                  +0.02
                </td>
                <td data-title="Change %" className="numeric">
                  1.32%
                </td>
                <td data-title="Open" className="numeric">
                  $1.14
                </td>
                <td data-title="High" className="numeric">
                  $1.15
                </td>
                <td data-title="Low" className="numeric">
                  $1.13
                </td>
                <td data-title="Volume" className="numeric">
                  56,431
                </td>
              </tr>
              <tr>
                <td data-title="Code">AAX</td>
                <td data-title="Company">Ausenco Limited</td>
                <td data-title="Price" className="numeric">
                  $4.00
                </td>
                <td data-title="Change" className="numeric">
                  -0.04
                </td>
                <td data-title="Change %" className="numeric">
                  -0.99%
                </td>
                <td data-title="Open" className="numeric">
                  $4.01
                </td>
                <td data-title="High" className="numeric">
                  $4.05
                </td>
                <td data-title="Low" className="numeric">
                  $4.00
                </td>
                <td data-title="Volume" className="numeric">
                  90,641
                </td>
              </tr>
              <tr>
                <td data-title="Code">ABC</td>
                <td data-title="Company">Adelaide Brighton Limited</td>
                <td data-title="Price" className="numeric">
                  $3.00
                </td>
                <td data-title="Change" className="numeric">
                  +0.06
                </td>
                <td data-title="Change %" className="numeric">
                  2.04%
                </td>
                <td data-title="Open" className="numeric">
                  $2.98
                </td>
                <td data-title="High" className="numeric">
                  $3.00
                </td>
                <td data-title="Low" className="numeric">
                  $2.96
                </td>
                <td data-title="Volume" className="numeric">
                  862,518
                </td>
              </tr>
              <tr>
                <td data-title="Code">ABP</td>
                <td data-title="Company">Abacus Property Group</td>
                <td data-title="Price" className="numeric">
                  $1.91
                </td>
                <td data-title="Change" className="numeric">
                  0.00
                </td>
                <td data-title="Change %" className="numeric">
                  0.00%
                </td>
                <td data-title="Open" className="numeric">
                  $1.92
                </td>
                <td data-title="High" className="numeric">
                  $1.93
                </td>
                <td data-title="Low" className="numeric">
                  $1.90
                </td>
                <td data-title="Volume" className="numeric">
                  595,701
                </td>
              </tr>
              <tr>
                <td data-title="Code">ABY</td>
                <td data-title="Company">Aditya Birla Minerals Limited</td>
                <td data-title="Price" className="numeric">
                  $0.77
                </td>
                <td data-title="Change" className="numeric">
                  +0.02
                </td>
                <td data-title="Change %" className="numeric">
                  2.00%
                </td>
                <td data-title="Open" className="numeric">
                  $0.76
                </td>
                <td data-title="High" className="numeric">
                  $0.77
                </td>
                <td data-title="Low" className="numeric">
                  $0.76
                </td>
                <td data-title="Volume" className="numeric">
                  54,567
                </td>
              </tr>
              <tr>
                <td data-title="Code">ACR</td>
                <td data-title="Company">Acrux Limited</td>
                <td data-title="Price" className="numeric">
                  $3.71
                </td>
                <td data-title="Change" className="numeric">
                  +0.01
                </td>
                <td data-title="Change %" className="numeric">
                  0.14%
                </td>
                <td data-title="Open" className="numeric">
                  $3.70
                </td>
                <td data-title="High" className="numeric">
                  $3.72
                </td>
                <td data-title="Low" className="numeric">
                  $3.68
                </td>
                <td data-title="Volume" className="numeric">
                  191,373
                </td>
              </tr>
              <tr>
                <td data-title="Code">ADU</td>
                <td data-title="Company">Adamus Resources Limited</td>
                <td data-title="Price" className="numeric">
                  $0.72
                </td>
                <td data-title="Change" className="numeric">
                  0.00
                </td>
                <td data-title="Change %" className="numeric">
                  0.00%
                </td>
                <td data-title="Open" className="numeric">
                  $0.73
                </td>
                <td data-title="High" className="numeric">
                  $0.74
                </td>
                <td data-title="Low" className="numeric">
                  $0.72
                </td>
                <td data-title="Volume" className="numeric">
                  8,602,291
                </td>
              </tr>
              <tr>
                <td data-title="Code">AGG</td>
                <td data-title="Company">Anglogold Ashanti Limited</td>
                <td data-title="Price" className="numeric">
                  $7.81
                </td>
                <td data-title="Change" className="numeric">
                  -0.22
                </td>
                <td data-title="Change %" className="numeric">
                  -2.74%
                </td>
                <td data-title="Open" className="numeric">
                  $7.82
                </td>
                <td data-title="High" className="numeric">
                  $7.82
                </td>
                <td data-title="Low" className="numeric">
                  $7.81
                </td>
                <td data-title="Volume" className="numeric">
                  148
                </td>
              </tr>
              <tr>
                <td data-title="Code">AGK</td>
                <td data-title="Company">AGL Energy Limited</td>
                <td data-title="Price" className="numeric">
                  $13.82
                </td>
                <td data-title="Change" className="numeric">
                  +0.02
                </td>
                <td data-title="Change %" className="numeric">
                  0.14%
                </td>
                <td data-title="Open" className="numeric">
                  $13.83
                </td>
                <td data-title="High" className="numeric">
                  $13.83
                </td>
                <td data-title="Low" className="numeric">
                  $13.67
                </td>
                <td data-title="Volume" className="numeric">
                  846,403
                </td>
              </tr>
              <tr>
                <td data-title="Code">AGO</td>
                <td data-title="Company">Atlas Iron Limited</td>
                <td data-title="Price" className="numeric">
                  $3.17
                </td>
                <td data-title="Change" className="numeric">
                  -0.02
                </td>
                <td data-title="Change %" className="numeric">
                  -0.47%
                </td>
                <td data-title="Open" className="numeric">
                  $3.11
                </td>
                <td data-title="High" className="numeric">
                  $3.22
                </td>
                <td data-title="Low" className="numeric">
                  $3.10
                </td>
                <td data-title="Volume" className="numeric">
                  5,416,303
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </>
);

export default ResponsiveTable;
