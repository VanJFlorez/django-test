import React from 'react';
import ReactDOM from 'react-dom';

import JqxRibbon from '../../../jqwidgets-react/react_jqxribbon.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myRibbon.setPopupLayout(0, 'near', 130, 205);
        this.refs.myRibbon.setPopupLayout(1, 'center', 130, 200);
        this.refs.myRibbon.setPopupLayout(2, 'center', 130, 260);
        this.refs.myRibbon.setPopupLayout(3, 'far', 130, 350);
    }
    render() {
        return (
            <JqxRibbon ref='myRibbon'
                width={410}
                height={30}
                mode={'popup'}
                position={'top'}
                selectionMode={'click'}
                animationType={'none'}
            >
                <ul>
                    <li>TV and Players</li>
                    <li>Cell phones</li>
                    <li>Cameras</li>
                    <li>Computers</li>
                </ul>
                <div>
                    <div>
                        <table>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>TV</a></b>
                                </td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>LED</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>LCD</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>Plasma</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>PLAYERS</a></b>
                                </td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>DVD</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>Blu-Ray</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>CD</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>PHONES</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Brand</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Display size</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>SMARTPHONES</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Brand</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By OS</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Display size</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By CPU</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>DIGITAL<br />
                                        CAMERAS</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>Hybrid</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>Compact</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>Digital SLR</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>CAMCORDERS</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>FLASH</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>HDD</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>HD Flash</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>HD HDD</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>HD Extreme</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>LAPTOPS</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Processor Type</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By RAM Capacity</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By HDD Capacity</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Display Size</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Brand</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>DESKTOPS</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Processor Type</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By RAM Capacity</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By HDD Capacity</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Brand</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <b><a href='#'>ALL-IN-ONE</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td className='list'>
                                    <a href='#'>By Brand</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </JqxRibbon>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
