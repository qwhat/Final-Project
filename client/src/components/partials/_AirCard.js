import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import AirRatingRecom  from './_AirRatingRecom'
import Image from 'react-bootstrap/Image'
import Geosuggest from 'react-geosuggest';
import Moment from 'react-moment';



///

export default class AirCard extends Component {

  componentDidMount() {
    console.log("AirCard Mounted");
  }

  onSuggestSelect = (suggest) => {
    this.props.onLocationUpdate(suggest.location)
  }


  qualityColor(airquality){
    if (airquality > 0 && airquality < 50){
      return "alert1"
    }
    else if (airquality > 50 && airquality < 100){
      return "alert2"
    }
    else if (airquality < 150 && airquality > 100){
      return "alert3"
    }
    else if (airquality > 150 && airquality < 200){
      return "alert4"
    }
    else if (airquality > 200 && airquality <300){
      return "alert5"
    }
    else if (airquality === 'undefined'){
      return "unavailable"
    }
    else {
      return "unavailable"
    }
  }
//separate file create and object with and object
  //export const airstrings = {"AQ1": "something"}
  //airSTrings and try to access the object    AQ + props

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }



  render() {
    var today = new Date();
    var date = `${today.getDate()}`;
    var fullDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const { open } = this.state;


    return (
      <div>
      <Container>
      <Card bg={this.qualityColor(this.props.airQuality)} className="cardcustom">
        <Card.Body>
        <Row>
          <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/></Col>
          <Col lg={10} md= {9} sm={8} xs={6}>
          <Card.Subtitle className="mb-2"><Card.Link href="/airQuality">Air Quality Index:  {this.props.airQuality} </Card.Link>- for Montreal, QC - <Moment format="MMMM Do YYYY">{fullDate}</Moment></Card.Subtitle>
          <div className="Aqi_num">
          <p className="aqiheadline"><AirRatingRecom airRating = {this.qualityColor(this.props.airQuality)}/></p>
          </div>
          <div align="right">
    <div className="cardicons" align="right"><Image src="forest.svg"/></div>
    </div>
    </Col>
  </Row>
  </Card.Body>
</Card>
</Container>
<Container>
  <Card>
    <Card.Body>
    <Row>
    <p>Check another location </p><br/>
    
    <Geosuggest placeholder="Enter Location" onSuggestSelect={this.onSuggestSelect}/>

    
    </Row>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
    <Row>
    <Col sm>
      <div className="rainbow"  onClick={() => this.setState({ open: !open })}
    aria-expanded={open}>
      <div className="rainbowgreen"></div>
      <div className="rainbowyellow"></div>
      <div className="rainboworange"></div>
      <div className="rainbowred"></div>
      <div className="rainbowmaroon"></div>
      <div className="rainbow"></div>
      <p><Image src="plus.svg" /> About Air Quality Index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </div>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
          The Air Quality Index (AQI) is used for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be a concern for you. The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air. EPA calculates the AQI for five major air pollutants regulated by the Clean Air Act: ground-level ozone, particle pollution (also known as particulate matter), carbon monoxide, sulfur dioxide, and nitrogen dioxide. For each of these pollutants, EPA has established national air quality standards to protect public health .Ground-level ozone and airborne particles are the two pollutants that pose the greatest threat to human health in this country.
          </div>
        </Collapse></Col></Row>
    </Card.Body>
  </Card>
</Container>
<Container>
</Container>
</div>

    );
  }
}
