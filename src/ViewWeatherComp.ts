import { Component } from "./component/Component";

export class Clicker extends Component {
  state = {
    image: "",
    name: "",
    ic: "",
    tempe:0,
    desc:"",
  };

  clearState = () => {
    this.setState({
      image: "",
      name: "",
      ic:"",
      tempe:0,
      desc:"",
    });
  };

  increaseCounter = () => {
    const data = JSON.parse(localStorage.Moscow);
    this.clearState();

    this.setState({
      image: this.state.image + data.imgMap,
      name: this.state.name + data.city,
      ic: this.state.ic + data.icn,
      tempe:this.state.tempe + data.temp,
      desc:this.state.desc + data.des,
    });
  };

  decreaseCounter = () => {
    const data = JSON.parse(localStorage.Omsk);
    this.clearState();
    this.setState({
      image: this.state.image + data.imgMap,
      name: this.state.name + data.city,
      ic: this.state.ic + data.icn,
      tempe:this.state.tempe + data.temp,
      desc:this.state.desc + data.des,
    });
  };

  events = {
    "click@button.inc": this.increaseCounter,
    "click@button.dec": this.decreaseCounter,
  };

  render() {
    return `
      
      <div class="flex-center"><div class="map"><div><img src=${this.state.image} width="200" height="200"></div></div><div class="messages"></div><div class="weather-form"><div><div class="messages"></div><div class="weather-form"><div>
         <h2 class="city-name" data-name=${this.state.name}>
         <span>${this.state.name}</span>
         </h2>
          <div class="city-temp"><sup>${Math.round(this.state.tempe)}°C</sup></div>
          <img class="city-icon" src=${this.state.ic} alt="Clouds">
          <figcaption>${this.state.desc}</figcaption>
        
      <button class="dec">-</button>
      <button class="inc">+</button>
    `;
  }
}
