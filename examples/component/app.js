const Svenjs = require('../../dist/sven.js');
var timeTravel = Svenjs.createComponent({
  initialState:{items: [], message:''},
  componentDidMount(){
    "use strict";
  },
  componentDidUpdate(){
    "use strict";
    console.log('did update');
  },
  
  handleClick: function (idx) {
    "use strict";
    this.state.items.splice(idx, 1);
    this.state.message = "Spliced!";
    Svenjs.setState(this.state, this.time, this);
  },
  getNextString: function () {
    "use strict";
    var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
    return words[Math.floor(Math.random() * words.length)];
  },
 
  render: function (state,time) {
    "use strict";
    state = state || this.state;
    time = time || this.time;
    var docFragment = document.createDocumentFragment();
    var rowDiv = document.createElement("div");
    rowDiv.id = "row";
    docFragment.appendChild(rowDiv);
    var app = document.createElement("div");
    app.id = "app";
    rowDiv.appendChild(app);
    var h3 = document.createElement("h3");
    var h3Text = document.createTextNode(this.state.message || "Sample App");
    h3.appendChild(h3Text);
    app.appendChild(h3);
    var button = document.createElement("button");
    var buttonText = document.createTextNode("Add Word");
    button.id = "add";
    button.onclick = ()=> {
      "use strict";
      
      state.items.push(this.getNextString());
      Svenjs.setState(state, time, this);
    };
    button.appendChild(buttonText);
    app.appendChild(button);
    var smallSpan = document.createElement("small");
    smallSpan.textContent = '(click word to delete)';
    app.appendChild(smallSpan);
    var wordSpan = document.createElement("span");
    wordSpan.id = 'count';
    wordSpan.textContent = 'Words: ' + state.items.length;
    app.appendChild(wordSpan);
    var ul = document.createElement("ul");
    state.items.forEach((item, idx)=> {
      var li = document.createElement("li");
      var textContent = document.createTextNode(item);
      li.appendChild(textContent);
      li.onclick =  () => {
        this.handleClick(idx);
      };
      ul.appendChild(li);
    });
    app.appendChild(ul);
    var timeTravelDiv = document.createElement("div");
    timeTravelDiv.id = "time-travel";
    rowDiv.appendChild(timeTravelDiv);
    var ttH3 = document.createElement("h3");
    var ttH3Text = document.createTextNode("Time Travel");
    ttH3.appendChild(ttH3Text);
    timeTravelDiv.appendChild(ttH3);
    button = document.createElement("button");
    buttonText = document.createTextNode("Back");
    button.id = "back";
    button.disabled = time.pos <= 0;
    button.onclick  = ()=> {
      "use strict";
      Svenjs.timeTravel(this,-1);
    }
    
    button.appendChild(buttonText);
    timeTravelDiv.appendChild(button);
    button = document.createElement("button");
    buttonText = document.createTextNode("Next");
    button.id = "next";
    button.disabled = time.pos >= time.history.length - 1;
    button.onclick  =()=> {
      "use strict";
      Svenjs.timeTravel(this,1);
    };
    button.appendChild(buttonText);
    timeTravelDiv.appendChild(button);
    var ttP = document.createElement("p");
    ttP.id = "time-pos";
    ttP.textContent =
      ('Position ' + (time.pos + 1) + ' of ' + time.history.length);
    timeTravelDiv.appendChild(ttP);
    return docFragment;
  }
});
module.exports = timeTravel;