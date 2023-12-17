import { Authetication, Categories, Home, InscriptionDetails, Inscriptions, Tournament, TournamentDetails } from "../pages";
import { Route, Routes } from "react-router-dom";

export function RoutesApp() {
    return (
        <Routes>
            {/* TELAS REFERENTES A AUTENTICAÇÃO */}
            <Route path="/" element={<Authetication />} />

            {/* TELAS REFERENTES A APLICAÇÃO */}
            <Route path="/home" element={<Home />} />

            {/* TELAS REFERENTES AO TORNEIO */}
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/tournament/details" element={<TournamentDetails />} />

            {/* TELAS REFERENTES AS CATEGORIAS */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/details" element={<Categories />} />

            {/* TELAS REFERENTES AS INSCRIÇÕES */}
            <Route path="/inscriptions" element={<Inscriptions />} />
            <Route path="/inscriptions/details" element={<InscriptionDetails />} />
        </Routes>
    )

}