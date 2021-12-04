import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/home";
import CadastroProduto from "./views/produtos/cadastro";

export default () => {
    return (
        <Routes>
            <Route path="cadastro-produto" element={<CadastroProduto />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}