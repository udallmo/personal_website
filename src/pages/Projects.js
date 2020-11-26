import React, { Component } from 'react'
import CustomizedButtons from "../components/button/CustomizedButtons";
import Navbar from '../components/navbar/Navbar';
import './css/Projects.css';
import MediaCard from '../components/card/Card'
import {ProjectData} from '../components/navbar/SidebarData';
import ParticlesComponent from '../components/particles/ParticleComponent';

export class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <ParticlesComponent/>
                <Navbar></Navbar>
                <div className="card-list">
                    {ProjectData.map((item, index) => {
                        return(<MediaCard key={index} info={item} order={index}></MediaCard>)
                    })}
                </div>
            </div>
        )
    }
}

export default Projects
