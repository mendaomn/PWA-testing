import Timer from "./timer.js";
import PubSub from "./pubsub.js";

const timer = new Timer();
const pubsub = PubSub();
const el = document.querySelector( "#timer" );

el.innerHTML = 0;

pubsub.on( "timerchange", (value) => {
  if ( value === 10 ) {
    timer.stop();
  }
  el.innerHTML = value;
});

el.addEventListener( "click", (e) => {
  timer.start();
  document.querySelectorAll( ".empty" )[ 0 ].classList.toggle( "full" );
});
