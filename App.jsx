import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MigrasiKPR from "./pages/MigrasiKPR";
import EstimasiHargaPasar from "./pages/EstimasiHargaPasar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <nav className="bg-blue-900 text-white flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">SLA Tools</div>
          <div>hai, <strong>Brian Ellia Aryan...</strong></div>
        </nav>
        <div className="p-6 grid gap-4">
          <Link to="/MigrasiKPR" className="block border border-blue-900 text-blue-900 py-3 px-4 rounded text-center">Migrasi KPR</Link>
          <Link to="/EstimasiHargaPasar" className="block border border-blue-900 text-blue-900 py-3 px-4 rounded text-center">Estimasi Harga Pasar Agunan</Link>
        </div>
        <Routes>
          <Route path="/MigrasiKPR" element={<MigrasiKPR />} />
          <Route path="/EstimasiHargaPasar" element={<EstimasiHargaPasar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;