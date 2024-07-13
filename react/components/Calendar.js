import { Button, ButtonGroup, Card, Col, Row } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";

import fetch from "../lib/fetch";
import moment from "moment";
import useSWR from "swr";

const CalendarApp = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/calendar`, fetch);

  const localizer = momentLocalizer(moment);

  const CustomToolbar = toolbar => {
    const goToDayView = () => toolbar.onView("day");

    const goToWeekView = () => toolbar.onView("week");

    const goToMonthView = () => toolbar.onView("month");

    const goToBack = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate("prev");
    };

    const goToNext = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate("next");
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate("current");
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span>
          <b>{date.format("MMMM")}</b>
          <span> {date.format("YYYY")}</span>
        </span>
      );
    };

    return (
      <div className="d-flex justify-content-between align-items-center p-3 flex-column flex-sm-row">
        <div>
          <h3 className="mb-0">{label()}</h3>
        </div>
        <div>
          <ButtonGroup className="button-shadow">
            <Button outline color="secondary" onClick={goToDayView}>
              Day
            </Button>
            <Button outline color="secondary" onClick={goToWeekView}>
              Week
            </Button>
            <Button outline color="secondary" onClick={goToMonthView}>
              Month
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup className="button-shadow">
            <Button outline color="secondary" onClick={goToBack}>
              Back
            </Button>
            <Button outline color="secondary" onClick={goToCurrent}>
              Today
            </Button>
            <Button outline color="secondary" onClick={goToNext}>
              Next
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  };

  if (error) return <div>Failed to load calendar data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} className="m-auto">
        <Card className="app-calendar">
          <Calendar
            localizer={localizer}
            events={data}
            defaultDate={new Date(2018, 3, 1)}
            components={{
              toolbar: CustomToolbar
            }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default CalendarApp;
