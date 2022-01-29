import "./style.css";
import {Clicker} from "./ViewWeatherComp";
import { InputWeatherComp } from "./InputWeatherComp";
// import "./js/app"



new Clicker(document.getElementById('container') as HTMLElement);
new InputWeatherComp(document.getElementById('form') as HTMLElement);
