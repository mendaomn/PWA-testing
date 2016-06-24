let instance;

export default function() {
  if ( instance ) {
    return instance;
  }
  return instance = new PubSub();
}

class PubSub {

  constructor() {
    this.subs = {};
  }

  on( name, cb ) {
    if ( !this.subs[ name ] ) {
      this.subs[ name ] = [];
    }
    this.subs[ name ].push( cb );
  }

  fire( name, message ) {
    if ( this.subs[ name ] ) {
      this.subs[ name ].forEach( cb => cb( message ) );
    }
  }

}
