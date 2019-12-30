import React, { useContext, useEffect } from "react";
import { MapContext } from '../context/context';

const Header = () => {
    const { data } = useContext(MapContext);
    const { scale } = data;
    return (
        <header className="header">
            <span>Echelle de la carte 2D => {Math.round(scale)}</span>
        </header>
    )
}

export default Header;