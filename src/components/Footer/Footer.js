import React from 'react';
import './Footer.css';

function Footer(props) {
    // style={{ fontSize: "14pt", background:"#999999" }}
    return (<footer className="navbar sticky-bottom navbar-expand-lg navbar-dark mt-3">
        <div className="col">
            <ul className="d-flex align-items-start flex-column" style={{ listStyleType: "none" }}>
                <li className="mb-3">
                    Тел: +7 9106896538
                                </li>
                <li>
                    E-mail: isa.org@inbox.ru
                                </li>
            </ul>
        </div>
        {/* style={{ display: "inline" }} */}
        <div className="col">
            <ul style={{ listStyleType: "none" }}>
                <li>
                {/* style={{ backgroundColor: "transparent", border: "none", borderBottom: "0.2rem solid red", outline: "none", color: "black" }} */}
                    <input type="email" className="pb-1 mr-5 mail-footer" placeholder="Email" />
                    {/* style={{ borderColor: "white", color: "black", borderWidth: "0.2rem" }} */}
                    <button className="btn check_hover">Подписаться</button>
                </li>
                <li className="mt-4">
                    E-mail: isa.org@inbox.ru
                                </li>
            </ul>
            {/* </div> */}
        </div>
    </footer>)
}

export default Footer