import React from 'react';
import './Footer.css';

function Footer(props) {
    return (<footer class="navbar sticky-bottom navbar-expand-lg navbar-dark mt-3" style={{ fontSize: "14pt", background:"#999999" }}>
        {/* <div className="raw" style={{width:"100%"}}> */}
        <div className="col" style={{ display: "inline" }}>
            <ul className="d-flex align-items-start flex-column" style={{ listStyleType: "none" }}>
                <li className="mb-3">
                    Тел: +7 9106896538
                                </li>
                <li>
                    E-mail: isa.org@inbox.ru
                                </li>
            </ul>
        </div>
        <div className="col" style={{ display: "inline" }}>
            <ul style={{ listStyleType: "none" }}>
                <li>
                    <input type="email" className="pb-1 mr-5" placeholder="Email" style={{ backgroundColor: "transparent", border: "none", borderBottom: "0.2rem solid red", outline: "none", color: "black" }} />
                    <button className="btn check_hover" style={{ borderColor: "white", color: "black", borderWidth: "0.2rem" }}>Подписаться</button>
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