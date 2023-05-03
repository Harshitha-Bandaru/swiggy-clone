import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
    this.state = {
      userInfo: {},
    };
    console.log("child-constructor" + this.props.name);
  }

  async componentDidMount() {
    // Make an API call
    //This is the best place to make an API call, because it is called after render in a component life cycle

    // console.log("child-componentDidMount" + this.props.name);

    const data = await fetch("https://api.github.com/users/Harshitha-Bandaru");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log("child-componentDidMount" + this.props.name);

    // this.timer = setInterval(() => {
    //   console.log("setInterval");
    // }, 1000);
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("componentDidUpdate");
    // if (prevState.count1 !== this.state.count1) {
    // }
    // if (prevState.count2 !== this.state.count2) {
    // }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // clearInterval(this.timer);
  }
  render() {
    console.log("child-render" + this.props.name);
    const { name, location, avatar_url } = this?.state?.userInfo;
    return (
      <div>
        {/* <h2>This is a class based component</h2>
        <h3>Name:{this.props.name}</h3>
        <h3>count1:{this.state.count1}</h3>
        <h3>count2:{this.state.count2}</h3>
        <button
          onClick={() => {
            // DO NOT MUTATE STATE DIRECTLY
            // NEVER DO this.state = something
            this.setState({ count1: this.state.count2, count2: 2 });
          }}
        >
          count
        </button> */}
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default Profile;

/**
 * Child - constructor
 * Child - render
 * Child - componentDidMount
 * API call is made
 * setState
 * <UPDATE CYCLES>
 * render
 * componentDidUpdate
 */
