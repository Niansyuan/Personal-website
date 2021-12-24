import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker__text"><img style={{ height: '30px', width: '30px' }} src="./image/marker.png" />{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 23.904673,
            lng: 121.487412
        },
        zoom: 10
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC16niWLmzQP18CZQRR8VDB_pH80JofGvQ' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={23.904673}
                        lng={121.487412}
                        text="米亞丸溪"
                    />
                    <AnyReactComponent
                        lat={24.0932031}
                        lng={121.561908}
                        text="三棧溪"
                    />
                    <AnyReactComponent
                        lat={23.971943}
                        lng={121.4811014}
                        text="翡翠谷"
                    />
                    <AnyReactComponent
                        lat={23.890749}
                        lng={121.3667383}
                        text="白鮑溪"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;