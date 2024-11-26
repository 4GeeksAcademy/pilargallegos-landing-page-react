import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center p-4">
            <div className="container center-vertically">
                <p className="m-0"> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p> {/* Lo puse así para probar este de fecha. */}
            </div>
        </footer>
    );
};

export default Footer;