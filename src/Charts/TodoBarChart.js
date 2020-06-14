import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import Title from "../Layouts/Title";

export default class Example extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Title>Task Statistics</Title>
        <BarChart
          data={this.props.data}
          margin={{
            top: 5,

            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, this.props.totalNum + 1]} />

          <Tooltip />

          <Bar dataKey="value" fill="#8884d8" minPointSize={1} />
        </BarChart>
      </React.Fragment>
    );
  }
}
