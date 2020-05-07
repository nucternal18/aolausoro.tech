import React from 'react';

const Footer = () => {
    return (
        <Footer>
            <div className='bg-black text-white container flex'>
                <div className="">
                    <p>© 2019 Copyright Aolausoro.tech</p>
                </div>
                <div className="">
                    <ul className="flex flex-row z-50">
                        <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                            <a href="https://www.linkedin.com/in/adewoyin-oladipupo-usoro-267291100/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                            <a href="https://twitter.com/woy_in">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </li>
                        <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                            <a href="https://github.com/nucternal18">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Footer>
    )
}

export default Footer;