export abstract class Component<State = {}> {
  state: State | undefined;
  el: HTMLElement;
  events: Record<string, () => void> = {};

  constructor(el: HTMLElement) {
    this.el = el;
    setTimeout(() => {
      this.el.innerHTML = this.render();
      this.subscribeToEvents();
    }, 0);
  }

  render() {
    return "";
  }

  setState(obj: Partial<State>) {
    Object.entries(obj).forEach(([key, value]) => {
      (this.state as any)[key] = value;
    });
    this.el.innerHTML = this.render();
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    Object.entries(this.events).forEach(([key, value]) => {
      const eventProps = key.split("@");
      const event = eventProps[0];
      const elem = eventProps[1].split(".")[0];
      const className = eventProps[1].split(".")[1];
      const selector = `${elem}${className ? `.${className}` : ""}`;
      const all = eventProps[1].split(".")[2];
      if (all && all.toLowerCase() === "all") {
        this.el
          .querySelectorAll(selector)
          .forEach((listener) => listener.addEventListener(event, value));
      } else {
        const listener = <HTMLElement>this.el.querySelector(selector);
        listener.addEventListener(event, value);
      }
    });
  }

  onMount(el: HTMLElement) {
    console.group(el.id);
    Object.entries(this.state!).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.groupEnd();
  }
}
