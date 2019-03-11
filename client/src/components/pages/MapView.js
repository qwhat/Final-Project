import React, { Component } from "react";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapView extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {marker: {}},
    points: [
      { id: 1, lat: 45.494338, lng: -73.670732, airiq: 73, icon: "/marker_2.png" },
      { id: 2, lat: 45.484338, lng: -73.560932, airiq: 33, icon: "/marker_1.png" },
      { id: 3, lat: 45.496338, lng: -73.550732, airiq: 45, icon: "/marker_4.png" }
    ]
  };
//updatelat

  // <Marker onClick={this.onMarkerClick}
  //         name={'Current location'}
  //         position={{lat: 45.496338, lng: -73.570732}} //first to say this is javascript the second to say this is an object
  //         />


    onMarkerClick = (props, marker, e) => {
      console.log(props)
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        updatelat: this.props.lat,
        updatelng: this.props.lng
      });
    }

      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    componentDidMount() {
      console.log("Map Mounted");
      ////this.props.updatestateAQI(this.props.lat, this.props.lng)
    }
    render() {
      const {updatelat = 45.496338, updatelng = -73.570732, aqi4map = 11} = this.props
      console.log('imrendering: ',this.props.displaymap)
      return (!this.props.displaymap ? null :
       <div>
        <div>{this.props.airQuality}</div>
        <Map google={this.props.google} zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{lat: updatelat, lng: updatelng}}
        styles= {
          [{ stylers: [{ 'saturation': -90 }, { 'gamma': 0.8 }] }] 
        }
        style={{width: '100%', height: '90%', position: 'relative'}}
        >
         <Marker 
        marker={{'airiq': aqi4map || ''}} 
        onClick={this.onMarkerClick} 
        position={{lat: updatelat, lng: updatelng}} 
        icon= "/marker_3.png"
        />

        {this.state.points.map(p => 
        <Marker 
        marker={{'airiq': p.airiq}} 
        key={p.id} onClick={this.onMarkerClick} 
        position={{lat: p.lat, lng: p.lng}} 
        icon= "/marker_3.png"
        />)}
        
        <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
          <div>
            <p>{this.state.selectedPlace.marker.airiq}</p>
          </div>
        </InfoWindow>
        </Map>
        </div>
      //);
      )  
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCAg5dTNT0GTYd9Erimp159mQC55f-nlKo')
  })(MapView)
