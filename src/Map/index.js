import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import image from '../resources/images/marker_icon.png';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Map extends React.Component {

    componentDidMount(){
        this.map = L.map('map',{
            center: [3.375303778843711, -76.54219450139041], //[865010,35, 1059489,65],
            zoom: 15,
            zoomControl: true
        });

        L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png',{
            detectRetina: true,
            maxZoom: 30,
            maxNativeZoom: 17
        }).addTo(this.map);

        var obIcon = L.icon({
            iconUrl: image,
            iconSize: [25, 25]
        });
        
        L.marker([3.375303778843711, -76.54219450139041], {icon: obIcon}).addTo(this.map).bindPopup('Limon');
        L.marker([3.372294545288487, -76.5348784249231], {icon: obIcon}).addTo(this.map).bindPopup('Palma areca');
        L.marker([3.372260172119361, -76.53486080745293], {icon: obIcon}).addTo(this.map).bindPopup('Coca');
    }

    render(){
        return <Wrapper width='100%' height='720px' id='map'/>
    }
}
