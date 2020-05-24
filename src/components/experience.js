import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../style/resume.css'


class Experience extends Component {
    render() {
        return(
            <Grid>
              {this.props.jobName}
            </Grid>
         )
    }
}

export default Experience;