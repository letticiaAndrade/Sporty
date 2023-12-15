import { Authetication, Categories, Home, Inscriptions, Tournament } from "../pages";
import { Route, Routes } from "react-router-dom";

export function RoutesApp() {
    return (
        <Routes>
            {/* TELAS REFERENTES A AUTENTICAÇÃO */}
            <Route path="/" element={<Authetication />} />

            {/* TELAS REFERENTES A APLICAÇÃO */}
            <Route path="/home" element={<Home />} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/inscriptions" element={<Inscriptions />} />



            

        </Routes>
    )

}