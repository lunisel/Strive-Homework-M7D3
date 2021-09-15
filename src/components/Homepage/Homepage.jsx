import { Component } from "react";
import JobList from "./JobList";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Container } from "react-bootstrap";

class Homepage extends Component {
  state = {
    jobs: [],
    jobSelected: null,
  };

  getJobs = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=18"
      );
      if (resp.ok) {
        let data = await resp.json();
        let jobs = data.data;
        this.setState({ ...this.state, jobs: jobs });
        console.log(this.state);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    await this.getJobs("limit=18");
  };

  changeJob = (job) => this.setState({ jobSelected: job });

  render() {
    return (
      <Container>
        <div className="home-cont">
          <JobList
            jobs={this.state.jobs}
            jobSelected={this.state.jobSelected}
            changeJob={this.changeJob}
          />
          <div className="prev-next-cont my-2">
            <div
              className="prev mr-2"
              onClick={() => this.getJobs(`limit=18&skip=0`)}
            >
              <BsArrowLeft style={{ fontSize: "2rem" }} />
            </div>
            <div
              className="next ml-2"
              onClick={() => this.getJobs("limit=18&skip=18")}
            >
              <BsArrowRight style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Homepage;
