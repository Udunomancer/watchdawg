import React from "react";
import Admin from "../../pages/Admin/Admin";
import AllEvents from "../../pages/AllEvents/AllEvents";
import AllRecords from "../../pages/AllRecords/AllRecords";
import EditEvent from "../../pages/EditEvent/EditEvent";
import EditRecord from "../../pages/EditRecord/EditRecord";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import NewEvent from "../../pages/NewEvent/NewEvent";
import NewRecord from "../../pages/NewRecord/NewRecord";
import SingleEvent from "../../pages/SingleEvent/SingleEvent";
import SingleRecord from "../../pages/SingleRecord/SingleRecord";

const Routes = [
    {
        path: "/",
        component: Home,
        isExact: true
    },{
        path: "/admin",
        component: Admin,
        isExact: true
    },{
        path: "/login",
        component: Login,
        isExact: true
    },{
        path: "/events",
        component: AllEvents,
        isExact: true
    },{
        path: "/events/new",
        component: NewEvent,
        isExact: true
    },{
        path: "/events/:id/edit",
        component: EditEvent,
        isExact: true
    },{
        path: "/events/:id",
        component: SingleEvent,
        isExact: true
    },{
        path: "/records",
        component: AllRecords,
        isExact: true
    },{
        path: "/records/new",
        component: NewRecord,
        isExact: true
    },{
        path: "/records/:id/edit",
        component: EditRecord,
        isExact: true
    },{
        path: "/records/:id",
        component: SingleRecord,
        isExact: true
    }
];

export default Routes;