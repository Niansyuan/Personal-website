import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

const InfoWindow = (props) => (
    props.show
        ? (
            <div className="infoWindow" style={{ width: 130, height: 70 }}>
                <div>
                    {props.children}
                </div>
            </div>
        )
        : null
);

const AnyReactComponent = (props) => {
    return (
        <div className="marker__text">
            <img style={{ height: '30px', width: '30px' }} src="./image/marker.png" />
            <React.Fragment>
                <InfoWindow
                    show={props.show}
                >
                    <a href={props.link} target="_blank" rel="check on google maps">
                        <div>
                            {props.text}<br />
                            {props.stars}
                        </div>
                    </a>

                </InfoWindow>
            </React.Fragment>
        </div>
    )
};


class SimpleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 23.904673,
                lng: 121.487412,
            },
            zoom: 10,
            show: false
        };
    };
    onChildClick = (key, childProps) => {
        this.setState({ show: !this.state.show })
    };
    handleClose = () => this.setState({ show: false });
    handleApiLoaded = (map, maps) => {
        console.log('Loading success')
    };
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC16niWLmzQP18CZQRR8VDB_pH80JofGvQ' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={this.handleApiLoaded}
                    onChildClick={this.onChildClick}
                >
                    <AnyReactComponent
                        lat={23.904673}
                        lng={121.487412}
                        text="米亞丸溪"
                        link={'https://www.google.com/maps/place/%E7%B1%B3%E4%BA%9E%E4%B8%B8%E6%BA%AA/@23.9046779,121.4852233,17z/data=!3m1!4b1!4m5!3m4!1s0x3468a3790eab8e9d:0x5954559ba6941cf7!8m2!3d23.904673!4d121.487412'}
                        stars={
                            <div>
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                            </div>
                        }
                        show={this.state.show}
                        handleClose={this.handleClose}
                    />
                    <AnyReactComponent
                        lat={24.0932031}
                        lng={121.561908}
                        text="三棧溪"
                        link={'https://www.google.com/maps/place/%E8%8A%B1%E8%93%AE%E7%B8%A3%E4%B8%89%E6%A3%A7%E6%BA%AA/data=!4m2!3m1!1s0x34689d6a55569bad:0xfd25abc6e134490f?sa=X&ved=2ahUKEwiksIK2hov1AhWRPZQKHZX9Ay0Q8gF6BAgeEAE'}
                        stars={
                            <div>
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                            </div>
                        }
                        show={this.state.show}
                        handleClose={this.handleClose}
                    />
                    <AnyReactComponent
                        lat={23.971943}
                        lng={121.4811014}
                        text="翡翠谷"
                        link={'https://www.google.com/maps/place/Feicui+Gu/@23.9719822,121.4811014,14z/data=!3m1!4b1!4m5!3m4!1s0x3468a27ba22e9a3b:0xe56f8c44d0c7fb02!8m2!3d23.9719444!4d121.4986111'}
                        stars={
                            <div>
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                            </div>
                        }
                        show={this.state.show}
                        handleClose={this.handleClose}
                    />
                    <AnyReactComponent
                        lat={23.890749}
                        lng={121.3667383}
                        text="白鮑溪"
                        link={'https://www.google.com/maps/place/%E7%99%BD%E9%AE%91%E6%BA%AA/@23.8810281,121.4669819,13.54z/data=!4m9!1m2!2m1!1z55m96a6R5rqq!3m5!1s0x3468a4764319714b:0xf009b899f924f8d8!8m2!3d23.890749!4d121.506814!15sCgnnmb3prpHmuqqSAQVyaXZlcg'}
                        stars={
                            <div>
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                                <img src='./image/icon.png' width={20} height={20} />
                            </div>
                        }
                        show={this.state.show}
                        handleClose={this.handleClose}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

SimpleMap.defaultProps = {
    center: {
        lat: 23.978673,
        lng: 121.497412
    },
    zoom: 11
};

export default SimpleMap;