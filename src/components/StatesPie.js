import React from "react";
import { getColleges } from "../auth";
import Chart from "chart.js";
import StateModal from "./StateModal";
import CourseModal from "./CourseModal";
import ColModal from "./ColModal";

class StatesPie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collist: [],
      selectState: "",
      selectedCourse: "",
      stateMap: new Map(),
      courseMap: new Map(),
      stateOpen: false,
      courseOpen: false,
      collOpen: false,
    };
  }

  componentDidMount() {
    // let ls = [...this.state.stateCount.keys()];
    // let values = [...this.state.stateCount.values()];
    var canvas1 = document.getElementById("chart1");
    var chart1 = new Chart(canvas1, {
      type: "doughnut",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#8db2ec",
              "#1e2543",
              "#b5448f",
              "#4122dd",
              "#46b476",
              "#560618",
              "#7a907a",
              "#5ad528",
              "#d34101",
              "#b96133",
              "#f499c6",
            ],
            data: [],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Number of colleges in various states",
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
    });

    canvas1.onclick = (e) => {
      var activePoints = chart1.getElementsAtEvent(e);
      if (activePoints[0] !== undefined) {
        var chartData = activePoints[0]["_chart"].config.data;
        var selectedIndex = activePoints[0]._index;
        this.setState({ selectState: chartData.labels[selectedIndex] });
        this.handleStateOpen();
      }
    };

    var canvas2 = document.getElementById("chart2");
    var chart2 = new Chart(canvas2, {
      type: "doughnut",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#8db2ec",
              "#1e2543",
              "#b5448f",
              "#4122dd",
              "#46b476",
              "#560618",
              "#7a907a",
              "#5ad528",
              "#d34101",
              "#b96133",
              "#f499c6",
              "#04743e",
              "#1f100d",
              "#f0ac0a",
              "#fad289",
              "#e69247",
              "#801d1d",
            ],
            data: [],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Course Popularity in Colleges",
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
    });

    canvas2.onclick = (e) => {
      var activePoints = chart2.getElementsAtEvent(e);
      if (activePoints[0] !== undefined) {
        var chartData = activePoints[0]["_chart"].config.data;
        var selectedIndex = activePoints[0]._index;
        this.setState({ selectedCourse: chartData.labels[selectedIndex] });
        this.handleCourseOpen();
      }
    };

    getColleges()
      .then((col) => {
        chart1.data.datasets[0].data = [15];
        var stateArr = [];
        var stateCountArr = [];
        var courseArr = [];
        var courseCountArr = [];
        this.setState({ collist: col.data });
        let len = col.data.length;
        let dumS = new Map();
        let dumC = new Map();
        for (let i = 0; i < len; i++) {
          dumS.get(col.data[i].state)
            ? dumS.set(col.data[i].state, dumS.get(col.data[i].state) + 1)
            : dumS.set(col.data[i].state, 1);

          let len2 = col.data[i].courses.length;
          for (let j = 0; j < len2; j++) {
            dumC.get(col.data[i].courses[j])
              ? dumC.set(
                  col.data[i].courses[j],
                  dumC.get(col.data[i].courses[j]) + 1
                )
              : dumC.set(col.data[i].courses[j], 1);
          }
        }

        [...dumS.keys()].map((state) => {
          stateArr.push(state);
        });

        [...dumS.values()].map((stateCount) => {
          stateCountArr.push(stateCount);
          return null;
        });

        chart1.data.labels = stateArr;
        chart1.data.datasets[0].data = stateCountArr;

        chart2.data.labels = courseArr;
        chart2.data.datasets[0].data = courseCountArr;

        [...dumC.keys()].map((course) => {
          courseArr.push(course);
        });

        [...dumC.values()].map((courseCount) => {
          courseCountArr.push(courseCount);
          return null;
        });

        this.setState({ stateMap: dumS, courseMap: dumC });
      })
      .catch((err) => console.log(err.message));

    setTimeout(function () {
      chart1.update();
      chart2.update();
    }, 1200);

    // setTimeout(function () {
    //   chart1.update();
    //   chart2.update();
    // }, 1000);
  }

  handleCourseOpen = () => {
    this.setState((prev) => ({ courseOpen: !prev.courseOpen }));
  };

  handleStateOpen = () => {
    this.setState((prev) => ({ stateOpen: !prev.stateOpen }));
  };

  handleCollOpen = () => {
    this.setState((prev) => ({ collOpen: !prev.collOpen }));
  };

  render() {
    return (
      <div>
        <div>
          <canvas
            style={{ cursor: "pointer" }}
            id="chart1"
            width="800"
            height="450"
          ></canvas>
        </div>
        <h1 style={{ textAlign: "center" }}>
          Click on pie charts for more colleges details
        </h1>
        <p style={{ textAlign: "center" }}>
          (If pie chart is not visible try changing the width of browser or
          refresh or click <a onClick={this.handleCollOpen}>here</a> for all
          colleges)
        </p>
        <div>
          <canvas
            style={{ cursor: "pointer" }}
            id="chart2"
            width="800"
            height="450"
          ></canvas>
        </div>
        <div>
          <StateModal
            isOpen={this.state.stateOpen}
            handleOpen={this.handleStateOpen}
            val={this.state.selectState}
            map={this.state.stateMap}
            colleges={this.state.collist}
          />
          <CourseModal
            isOpen={this.state.courseOpen}
            handleOpen={this.handleCourseOpen}
            val={this.state.selectedCourse}
            map={this.state.courseMap}
            colleges={this.state.collist}
          />
          <ColModal
            isOpen={this.state.collOpen}
            handleOpen={this.handleCollOpen}
            colleges={this.state.collist}
          />
        </div>
      </div>
    );
  }
}

export default StatesPie;
