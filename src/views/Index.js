import Chart from "chart.js";
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
     
        <Row className="mt-5">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Applications</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      // href="/admin/tables"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Apply Bursary
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Application Type</th>
                    <th scope="col">Application No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Primary Bursary</th>
                    <td>4,569</td>
                    <td>2-Jan-2022</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> Disbursed
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Primary Bursary</th>
                    <td>3,985</td>
                    <td>5-June-2022</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      Declined
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Secondary Bursary</th>
                    <td>3,513</td>
                    <td>12-Dec-2022</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      Declined
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Secondary Bursary</th>
                    <td>2,050</td>
                    <td>4-Feb-2023</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> Disbursed
                    </td>
                  </tr>
                  
                </tbody>
              </Table>
            </Card>
          
        </Row>
      </Container>
    </>
  );
};

export default Index;
