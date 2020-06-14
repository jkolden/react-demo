import React, { Component, Fragment } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Title from "../Layouts/Title";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Tasks by Completion Status</Title>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            data={this.props.data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {this.props.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </React.Fragment>
    );
  }
}
