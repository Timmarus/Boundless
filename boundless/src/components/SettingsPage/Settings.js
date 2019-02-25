import React, { Component } from "react";
import SettingsForm from "./SettingsForm";

export class Settings extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SettingsForm />
        </div>
      </div>
    );
  }
}

export default Settings;
