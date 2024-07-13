import { Button, ButtonGroup, Col, Row } from "reactstrap";

import Activity from "../public/animated-icons/activity/activity.json";
import AnimatedIcon from "./core/AnimatedIcon";
import Avatar from "./core/Avatar.js";
import Heart from "../public/animated-icons/heart/heart.json";
import ImageStatCard from "./core/ImageStatCard";
import Like from "../public/animated-icons/thumb/thumb.json";
import NewsCard from "./core/NewsCard";
import PostCard from "./core/PostCard";
import ProfileCard from "./core/ProfileCard";
import Sound from "../public/animated-icons/online/online.json";
import StatCard from "./core/StatCard";
import Sun from "../public/animated-icons/sun-weather/sun-weather.json";
import WeatherCard from "./core/WeatherCard";
import Windy from "../public/animated-icons/windy-weather/windy-weather.json";
import fetch from "../lib/fetch";
import useSWR from "swr";
import { useState } from "react";

const Widgets = ({}) => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/feed`, fetch);

  const [stats] = useState([
    {
      title: "Comments",
      value: 24
    },
    {
      title: "Likes",
      value: 45
    },
    {
      title: "Shares",
      value: 984
    }
  ]);
  const iconSize = 22;

  return (
    <>
      <Row>
        <Col sm={6} md={3}>
          <StatCard
            title="Users"
            value={"576K"}
            icon={<AnimatedIcon animationData={Heart} size={iconSize} />}
            type={"primary"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Uptime"
            value={"99.99%"}
            icon={<AnimatedIcon animationData={Sound} size={iconSize} />}
            type={"secondary"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Visitors"
            value={"465K"}
            icon={<AnimatedIcon animationData={Activity} size={iconSize} />}
            type={"warning"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Likes"
            value={"7,578"}
            icon={<AnimatedIcon animationData={Like} size={iconSize} />}
            type={"danger"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={3}>
          <StatCard
            title="Users"
            value={"576K"}
            icon={<AnimatedIcon animationData={Heart} size={iconSize} />}
            type={"dark"}
            fill
            reverse
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Server Uptime"
            value={"99.99%"}
            icon={<AnimatedIcon animationData={Sound} size={iconSize} />}
            type={"success"}
            fill
            reverse
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Unique Visitors"
            value={"465K"}
            icon={<AnimatedIcon animationData={Activity} size={iconSize} />}
            type={"info"}
            fill
            reverse
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Likes"
            value={"7,578"}
            icon={<AnimatedIcon animationData={Like} size={iconSize} />}
            type={"primary"}
            fill
            reverse
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={3}>
          <StatCard
            title="Users"
            value={"576K"}
            icon={<AnimatedIcon animationData={Heart} size={iconSize * 2} />}
            type={"danger"}
            vertical
            fill
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Server Uptime"
            value={"99.99%"}
            icon={<AnimatedIcon animationData={Sound} size={iconSize * 2} />}
            type={"info"}
            vertical
            fill
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Unique Visitors"
            value={"465K"}
            icon={<AnimatedIcon animationData={Activity} size={iconSize * 2} />}
            type={"warning"}
            vertical
            fill
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Likes"
            value={"7,578"}
            icon={<AnimatedIcon animationData={Like} size={iconSize * 2} />}
            type={"dark"}
            vertical
            fill
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={3}>
          <StatCard
            title="UX Developer"
            value={"Samuel"}
            icon={
              <Avatar
                src={`${process.env.baseUrl}images/avatar.jpg`}
                size={30}
              />
            }
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="San Francisco, CA"
            value={"14°C"}
            icon={
              <AnimatedIcon
                animationData={Sun}
                size={iconSize + 4}
                isStopped={false}
              />
            }
            type={"secondary"}
            fill
            reverse
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="San Francisco, CA"
            value={"14°C"}
            icon={
              <AnimatedIcon
                animationData={Windy}
                size={iconSize + 4}
                isStopped={false}
              />
            }
            type={"primary"}
            fill
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="San Francisco, CA"
            value={"14°C"}
            icon={
              <AnimatedIcon
                animationData={Windy}
                size={iconSize + 4}
                isStopped={false}
              />
            }
            type={"danger"}
            fill
            reverse
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
      </Row>

      <div className="row">
        <div className="col-md-12 col-xl-4">
          {data ? (
            <NewsCard
              title="Feed"
              subtitle={
                <ButtonGroup size="sm" className="button-shadow">
                  <Button outline color="secondary">
                    ◄
                  </Button>
                  <Button outline color="secondary">
                    ►
                  </Button>
                </ButtonGroup>
              }
              feed={data}
            />
          ) : (
            "Loading ..."
          )}
        </div>
        <div className="col-md-6 col-xl-4">
          <ImageStatCard
            title="image stat card"
            images={[
              `${process.env.baseUrl}images/unsplash/2.jpg`,
              `${process.env.baseUrl}images/unsplash/1.jpg`,
              `${process.env.baseUrl}images/unsplash/13.jpg`
            ]}
            imageHeight={201}
            stats={stats}
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <ProfileCard
            name={"John Doe"}
            avatar={`${process.env.baseUrl}images/face1.jpg`}
            images={[
              `${process.env.baseUrl}images/unsplash/4.jpg`,
              `${process.env.baseUrl}images/unsplash/6.jpg`
            ]}
            location={"London, Uk"}
            imageHeight={201}
            stats={stats}
            callHandler={() => alert("Call button clicked")}
            messageHandler={() => alert("Message button clicked")}
          />
        </div>
      </div>

      <Row>
        <Col sm={12} md={6}>
          <WeatherCard city="harare" country="zw" days={7} />
        </Col>

        <Col sm={12} md={6}>
          <PostCard
            title="Shrimp and Chorizo Paella"
            subtitle="Yesterday"
            images={[
              `${process.env.baseUrl}images/unsplash/1.jpg`,
              `${process.env.baseUrl}images/unsplash/15.jpg`
            ]}
            imageHeight={294}
            text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
          />
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
