import { Authetication } from "../pages";
import { Route, Routes } from "react-router-dom";

export function RoutesApp() {
    return (
        <Routes>
            {/* TELAS REFERENTES A AUTENTICAÇÃO */}
            <Route path="/" element={<Authetication />} />
        </Routes>
    )

}