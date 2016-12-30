class Game {
   constructor() {
      console.log('hey, whats your name? ( iAmCalled(\'yourname\') )');
      window.iAmCalled = this.iAmCalled;
      window.yes = this.yes;
      window.no = this.no;
      window.okIllHireYou = this.okIllHireYou;
      window.justCoz = this.justCoz;
      window.fuckOff = this.fuckOff;
   }

   yes() {
      return 'Awesome! drop me an email dan@dabb.io or call me on 07790805273. Speak soon!';
   }

   iAmCalled(name) {
      return `Hey ${name}, thanks for visiting my site, are you interested in hiring me? ( yes(), no() )`;
   }

   no() {
      return 'Why not? ( justCoz(), fuckOff(), okIllHireYou() )';
   }

   okIllHireYou() {
      return yes();
   }

   justCoz() {
      return 'hardly an excuse, but thats fine, thanks for your consideration';
   }

   fuckOff() {
      console.log('Well theres no need to be like that');
      console.log('I hope you ain\'t on the work network...');
      console.log('You\'re fucked...');

      setTimeout(function(){ console.log('bye!'); }, 2000);
      setTimeout(function(){ console.log('5...'); }, 3000);
      setTimeout(function(){ console.log('4...'); }, 4000);
      setTimeout(function(){ console.log('3...'); }, 5000);
      setTimeout(function(){ console.log('2...'); }, 6000);
      setTimeout(function(){ console.log('1...'); }, 7000);
      setTimeout(function(){ console.log('enjoy!'); }, 8000);
      setTimeout(function(){ window.location = 'http://www.pornhub.com'; }, 9000);
   }


}

export default Game;