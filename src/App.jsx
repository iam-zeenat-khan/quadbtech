import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

import Layout from './components/Layout'; // Your Todo Layout Component
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Public route: Login */}

          {/* Protected Route: Layout/Todo */}
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <Layout /> {/* Layout component (Todo) */}
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
