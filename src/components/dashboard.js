import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import ControlledOpenSelect from './selector.js';
  




export default class dashboard extends Component {

constructor(props){
  super(props)
  this.state={
    switch: false,
    slider: 0,
    selector: 1,
    systemNotifications: [],
  }
}



handleChange = (event, newValue) => {
  console.log(event.target, newValue)

  if(event.target.name == 'switch'){
    this.setState({ ... this.state, [event.target.name]: event.target.checked });
  }
  else{
    this.setState({slider:newValue})
  }
  if (this.state.switch){
    // let temp = this.state.systemNotifications
    // temp.push("Your application is offline. You won't be able to share or stream music to other devices.")
  this.setState({systemNotifications:[...this.state.systemNotifications, "Your application is offline. You won't be able to share or stream music to other devices"]})
  }
  if (this.state.slider >= 80){
    this.setState({systemNotifications:[...this.state.systemNotifications, "Listening to music at a high volume could cause long-term hearing loss."]})
  }
};

selectorChange = (event) =>{
  console.log(event)
  this.setState({selector:event.target.value})
  if (this.state.selector == 1){
    this.setState({systemNotifications:[...this.state.systemNotifications, "Music quality is degraded. Increase quality if your connection allows it."]})
  }
}



  render() {
    console.log (this.state)
    return (
      <div>
        <div className='cards'>
        <Card>
      <CardContent>
        <Typography variant="h5" component="h1">
          Online Mode
        </Typography>
        <Typography variant="h6" component="h1">
          Is this system online?
        </Typography>
      </CardContent>
      <CardActions>
      <Switch
        checked={this.state.switch}
        onChange={this.handleChange}
        name="switch"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      
      />
      </CardActions>
    </Card>
        <Card className = "slideCard">
      <CardContent>
        <Typography variant="h5" component="h2">
          Mater Volume
        </Typography>
        <Typography variant="h6" component="h2">
          Overrides all other sound 
          <br></br>
          settings in this application
        </Typography>
      </CardContent>
      <CardActions className="slider">
      <Slider
        value={this.state.slider}
        // getAriaValueText={this.state.slider}
        onChange={this.handleChange}
        name='slider'
        aria-labelledby="discrete-slider-small-steps"
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
      </CardActions>
    </Card>
        <Card className='selectCard'>
      <CardContent>
        <Typography variant="h5" component="h1">
          Sound Quality
        </Typography>
        <Typography variant="h6" component="h1">
          Manually controll the music 
          <br></br>
          quality in event of poor 
          <br></br>
          connection
        </Typography>
      </CardContent>
      <CardActions>
       <ControlledOpenSelect handleChange={this.selectorChange}/>
      </CardActions>
    </Card>
    </div>

    <div>
        <h1>System Notifications</h1>

        {this.state.systemNotifications.map(message => {
          return(
            <p>{message}</p>
          )
        })}

        
    </div>
      
    </div>
    )
  

    

  
  }
}
