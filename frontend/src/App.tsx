
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/student/Dashboard';
import ProducerDashboard from './pages/producer/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/producer/*" element={<ProducerDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
