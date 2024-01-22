import React from "react";
import { Routes, Route } from 'react-router-dom';
import {useScrollToTop} from '../../hooks/scroll'; 

import AboutPage from '../components/pages/About';

const About = () => {
   useScrollToTop();

    return <AboutPage />
};

export default About;