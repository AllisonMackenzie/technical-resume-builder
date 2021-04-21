import * as React from "react";
import Minimalist from "../components/templates/Minimalist";
import TwoColumn from "../components/templates/TwoColumn";

export default class ResumePreview extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.type === "minimalist" ? (
          <Minimalist
            user={this.props.userData}
            employment={this.props.empData}
            empCount={this.props.empCount}
            education={this.props.eduData}
            eduCount={this.props.eduCount}
            project={this.props.projectData}
            projectCount={this.props.projectCount}
            headerColor={this.props.headerColor}
            headerTextColor={this.props.headerTextColor}
          />
        ) : (
          <TwoColumn
            user={this.props.userData}
            employment={this.props.empData}
            empCount={this.props.empCount}
            education={this.props.eduData}
            eduCount={this.props.eduCount}
            project={this.props.projectData}
            projectCount={this.props.projectCount}
            headerColor={this.props.headerColor}
            headerTextColor={this.props.headerTextColor}
          />
        )}
      </React.Fragment>
    );
  }
}
