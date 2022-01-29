import { Component } from "./component/Component";

export class InputWeatherComp extends Component {
  state = {
    input: "Уебан",

  };

  clearState = () => {
    this.setState({
    });
  };

  increaseCounter = () => {
    this.clearState();

    this.setState({
    });
  };

  setInputValue = (ev: Event) => {
    this.setState({
      input: (ev.target as HTMLInputElement).value,
    });
  };

  events = {
    'change@input': this.setInputValue,
  };


  render() {
    return `
      
    <label>
            <input
                    id="text"
                    type="text"
                    placeholder="Type your city"
                    list="data-list"
                    autocomplete="off"
                    required
                    autofocus
                    value="${this.state.input}"
            />
        </label>
        <datalist id="data-list"></datalist>
        <button type="submit">Submit</button>
    `;
  }
}
