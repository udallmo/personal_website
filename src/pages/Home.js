import React, { Component } from 'react';
import './css/Home.css';
import {SocialData} from '../components/navbar/SidebarData';
import CustomizedButtons from "../components/button/CustomizedButtons";
import { Link } from 'react-router-dom';
import ParticlesComponent from '../components/particles/ParticleComponent';

export class Home extends Component {
    render() {
        return (<>
            <div className="home">
                <ParticlesComponent/>
                <div className="titleContainer">
                    <h1 className="title" style={{paddingTop: "25vh"}}>{`Udall Mo`}</h1>
                    <h4 className="title" style={{fontSize: "0.9em"}}>{`Full Stack Developer | Computer Engineer`}</h4>
                    <div className="bar"></div>

                    <div className="text">A creative software engineer, developing anything that inspires him while trying to become the next best amateur cook. </div>
                    
                    <div className="buttonContainer">
                    <Link to="/projects">
                        <CustomizedButtons title={"Projects"} className="button"></CustomizedButtons>
                    </Link>
                    </div>

                    <div className="social">
                            {SocialData.map((item, index) => {
                            return(
                                <div key={index} className={item.cName}>
                                    <a target="_black" href={item.path}>{item.icon}</a>
                                </div>  
                            )})}
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Home