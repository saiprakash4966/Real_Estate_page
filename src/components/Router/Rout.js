import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Homepage';
import ProjectPage from '../Projectpage';

function Rout() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/Projectpage' element={<ProjectPage />} />
                
                   
                </Routes>
            </Router>
        </div>
    );
}

export default Rout;

