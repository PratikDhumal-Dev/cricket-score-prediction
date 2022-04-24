import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SideBarData";
import Card from "react-bootstrap/Card";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1
        style={{
          textAlign: "center",
          marginLeft: "-60px",
          paddingBottom: "20px",
          color: "white",
          marginTop: "-5px",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        LATEST NEWS
      </h1>
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <div>
              <Card
                border="info"
                style={{ width: "30rem" }}
                className="sidebar-card"
              >
                <Card.Header style={{ paddingTop: "10px" }}>
                  Latest News
                </Card.Header>
                <Card.Body>
                  <Card.Title>IPL 2022, RR vs KKR Highlights</Card.Title>
                  <Card.Text style={{ paddingBottom: "10px" }}>
                    Shreyas Iyer, Aaron Finch's efforts fall short as Kolkata
                    Knight Riders fall short against Rajasthan Royals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
