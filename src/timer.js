import PubSub from "./pubsub.js";

const pubsub = PubSub();

export default class Timer {

  constructor() {
    this.value = 0;
    this.increment = this.increment.bind( this );
    this.stop = this.stop.bind( this );
  }

  start() {
    this.interval = setInterval( () => {
      this.increment();
      pubsub.fire( "timerchange", this.value );
    }, 100 );
    pubsub.fire("timerstart");
  }

  stop() {
    clearInterval( this.interval );
    pubsub.fire("timerstop", this.value );
  }

  increment() {
    this.value += 1;
  }

}
