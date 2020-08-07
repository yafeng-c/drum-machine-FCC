import React, { Component } from 'react';

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class DrumPad extends Component {
    state = {
        currentBank: bankOne,
        bankRef: "heat",
        power: true,
        volume: 50,
        currentClip:'-'
      };
    
    playSong = (e) => {
      let audio = e.target.querySelector("audio");
      let display = document.getElementById("display");
      audio.volume = this.state.volume / 100;
      if(this.state.power){
        display.innerHTML = audio.id; 
        audio.play();
      }
      
    }

    handlePower = () => {
      this.setState({
        power: !this.state.power,
      })
      if(this.state.power){
        let display = document.getElementById("display");
        display.innerHTML = '-'
      }
    }

    handleBank = () => {
      this.setState(
          {
          currentBank: this.state.currentBank === bankOne ? bankTwo : bankOne,
          bankRef: this.state.bankRef === "heat" ? "chord" : "heat"
        })
    }

    handleVolume = (e) => {
        this.setState({
          volume: e.target.value
        });
        document.getElementById('slider').innerHTML = this.state.volume;
    }
    
    render(){
        return(
            <div className="pads">
              <div className="btns">
                <button className="power" onClick={this.handlePower}>
                  {this.state.power ? "Power-on" : "Power-off"}
                </button>
                <button className="soundBank" onClick={this.handleBank}>{this.state.bankRef}</button>
                <input className="slider" id="slider" min={1} max={100} type="range" onChange={this.handleVolume} value={this.state.volume}/>
              </div>

            <div className="pad">
              {this.state.currentBank.map(song => (
                  <div className="drum-pad"
                      key={song.keyCode}
                      id={song.id}                      
                      onClick={this.playSong}
                  >
                      {song.keyTrigger}
                      <audio id={song.id} src={song.url} className="clip" />
                  </div>
              ))}       
            </div>
          </div>           
        )
    }
}

export default DrumPad