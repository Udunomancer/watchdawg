import React from "react";

function SideBar() {

    return (
        <ul id="sidebar" className="sidenav">
            <li>
                <div className="user-view">
                    <div className="background">
                        <img src="https://via.placeholder.com/350x150" />
                    </div>
                    <a href="#user"><img className="circle" src="https://via.placeholder.com/350x150" /></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">john.doe@sample.com</span></a>
                </div>
            </li>
            <li>
                <a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a>
            </li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><div className="subheader">Subheader</div></li>
            <li><a className="waves-effect" href="#!">Third link with waves</a></li>
        </ul>
    )
}

export default SideBar;