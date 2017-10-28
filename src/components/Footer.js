import React from 'react';

const Footer = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                    <div className="col-4"><a className="navbar-text" href="/"><h4>Project Toffee</h4></a></div>

                    <div className="col-8 navbar-text">
                        <ul className="flex-row nav">
                            <li className="nav-item"><a className="nav-link"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
             </div>
           
            
                <div className="container navbar-text">
                
                    <ul className="flex-row nav">
                        <li className="nav-item"><a className="nav-link">Site 1</a>
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">Cras justo odio</li>
                                <li className="list-group-item list-group-item-dark">Dapibus ac facilisis in</li>
                                <li className="list-group-item list-group-item-dark">Morbi leo risus</li>
                                <li className="list-group-item list-group-item-dark">Porta ac consectetur ac</li>
                                
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link">Site 2</a>
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">Cras justo odio</li>
                                <li className="list-group-item list-group-item-dark">Dapibus ac facilisis in</li>
                                <li className="list-group-item list-group-item-dark">Morbi leo risus</li>
                                <li className="list-group-item list-group-item-dark">Porta ac consectetur ac</li>
                                <li className="list-group-item list-group-item-dark">Vestibulum at eros</li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link">Site 3</a>
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">Cras justo odio</li>
                                <li className="list-group-item list-group-item-dark">Dapibus ac facilisis in</li>
                                <li className="list-group-item list-group-item-dark">Morbi leo risus</li>
                                
                            </ul>
                        </li>
                        
                    </ul>
          
                </div>
            

            <div className="container">
                <ul className="nav justify-content-start">
                    <a className="nav-link navbar-text" href="/">Privacy</a>
                    <a className="nav-link navbar-text" href="/">Terms & Conditions</a>
                    <a className="nav-link navbar-text" href="/">Contact Us</a>                    
                </ul>
                
            </div>

            <div className="container">
                <div className="col"><p className="navbar-text">Copyright <i className="fa fa-copyright" aria-hidden="true"></i>2017 Project Toffee</p></div>
            </div>
        </nav>
    );
}

export default Footer;