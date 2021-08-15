import React, { Component } from "react";
import Clock from "../components/Clock";
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* pass value to component */}
        <Clock format="vi-VN" timezone="Asia/Ho_Chi_Minh" />
        <Clock format="vi-VN" timezone="America/Chicago" />
        <Clock format="vi-VN" timezone="America/New_York" />
      </div>
    );
  }
}
