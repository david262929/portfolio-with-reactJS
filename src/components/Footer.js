import React from 'react';
import './styles/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <small className="copyright">
                    Powered by <a href="http://www.davidghazaryan.ga" target="_blank" rel="noopener noreferrer"> David Ghazaryan</a> 2018-2020
                </small>
            </div>
        </footer>
    );
}

export default Footer;