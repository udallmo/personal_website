import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Pdf from '../../resources/umo_resume.pdf';

import logo from '../../resources/no.jpg'
export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "About",
        path: '/about',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: "Skills",
        path: '/skills',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Projects",
        path: '/projects',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Contact",
        path: '/contact',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
]

export const SocialData = [
    {
        title: "git",
        path: 'https://github.com/udallmo',
        icon: <FaIcons.FaGithub />,
        cName: 'icon'
    },
    {
        title: "linkedin",
        path: 'https://www.linkedin.com/in/udall-mo-a13b17127/',
        icon: <AiIcons.AiFillLinkedin />,
        cName: 'icon'
    },
    {
        title: "facebook",
        path: 'https://www.facebook.com/',
        icon: <FaIcons.FaFacebook />,
        cName: 'icon'
    },
    {
        title: "insta",
        path: 'https://www.instagram.com/udall_mo/',
        icon: <AiIcons.AiFillInstagram />,
        cName: 'icon'
    },
    {
        title: "resume",
        path: Pdf,
        icon: <IoIcons.IoIosPaper />,
        cName: 'icon'
    },
]

// TODO: replace with script that check github for automated updates
export const ProjectData = [
    {
        title: "CLI Social Network",
        image: logo,
        desc: "Command-line interface that executes the functionality of a social network. Applying database theory and relational methodology.",
        git: "https://github.com/udallmo/social_network_simulation",
        url: "",
        tags: ["python", "sql"]
    },
    {
        title: "Molar Mass Calculator",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "Android application that parses chemical compounds and calculate the corresponding molar mass.",
        git: "https://github.com/udallmo/MolarMassApp",
        url: "",
        tags: ["java", "android studio"]
    },
    {
        title: "WASM Soduku Solver",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "A web application that solves Soduku puzzles. Integrated with a backtracking algorithms to identify the solution optimally.",
        git: "https://github.com/udallmo/wasm_soduku_solver",
        url: "",
        tags: ["WebAssembly", "JavaScript", "C"]
    },
    {
        title: "TFT Game Analyzer",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "A web application that visualizes the current game strategies and analyzes the top players from the game, Teamfight Tactics.",
        git: "https://github.com/udallmo/tft_analytics",
        url: "",
        tags: ["GraphQL", "React", "Apollo", "NodeJS"]
    },
    {
        title: "Breakout Game",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "A recreation of the game 'Breakout', a game where the player must bounce a ball back and forth into a pile of bricks using a paddle.",
        git: "https://github.com/udallmo/breakout",
        url: "",
        tags: ["python"]
    },
    {
        title: "Ultrasonic Sensor",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "Measures the distance of objects in front of an ultrasonic and displays the measurement in a GUI.",
        git: "https://github.com/udallmo/ultrasonic_sensor",
        url: "",
        tags: ["python", "C++", "Arduino"]
    },
    {
        title: "Kabe Glove",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "Recreating those movie magic moments in real life through the creation of a glove that triggers soundtracks.",
        git: "https://github.com/udallmo/kabe_glove",
        url: "",
        tags: ["python", "C++" ,"Arduino"]
    },
    {
        title: "Udall 2.0",
        image: "https://www.wallsauce.com/pdi/58655/1000/0/0/tiger-art-wallpaper.jpg",
        desc: "A Flutter application determine the distance the uesr is from Udall Mo. Also allows user to playback famous line that he had said.",
        git: "https://github.com/udallmo/udall-v2",
        url: "",
        tags: ["dart", "flutter"]
    }
]