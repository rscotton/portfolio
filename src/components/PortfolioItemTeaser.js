import React from "react";
import { Waypoint } from 'react-waypoint';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledTo: false
    };
  }

  handleEnter(e) {
    if (!this.state.scrolledTo) {
      this.setState({ scrolledTo: true })
    }
  }

  render() {
    const teaserClasses = 'portfolio-teaser' + (this.state.scrolledTo ? ' animate' : '');

    return (
      <Waypoint bottomOffset="50px" onEnter={(e) => this.handleEnter(e)}>
        <div className={teaserClasses}>
          <h3>{this.props.title}</h3>
          <a className="meta meta-website" href={this.props.website} target="_blank" rel="noopener noreferrer">{this.props.website}</a>
          <div className="meta meta-stack">
            <h5>Stack:</h5>
            <ul className="stack">
              {this.props.stack.map((stackItem, i) => (
                <li key={i} className="stackItem">{stackItem}</li>
              ))}
            </ul>
          </div>
          <div className="description" dangerouslySetInnerHTML={{ __html: this.props.content }}/>
        </div>
      </Waypoint>
    )
  }
}