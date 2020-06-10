import React, { PureComponent, Component } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Typography from "@material-ui/core/Typography";

const data = [
  { name: "ERJ-140", value: 30 },
  { name: "ERJ-145", value: 40 },
  { name: "B738", value: 10 },
  { name: "ERJ-175", value: 5 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" gutterBottom>
          Todos by Time
        </Typography>
        <ResponsiveContainer>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie
              data={this.props.todos}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="time"
            >
              {this.props.todos.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
