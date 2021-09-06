import React, {useEffect, useState} from 'react';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import {Container} from "react-bootstrap";
import Homescreen from "./components/homescreen/homescreen";
import './_app.scss'
import LoginScreen from "./components/screens/LoginScreen";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import { useSelector } from 'react-redux';
import WatchScreen from './components/watchScreen.js/WatchScreen';


const Layout = ({children}) =>{

    const [sidebar, toggleSidebar] = useState(false);


    const handleToggleSideBar = () => toggleSidebar(value=> !value)

    return(
        <>
            <Header handleToggleSideBar = {handleToggleSideBar}/>
            <div className="app_container">
                 <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSideBar}/>
                <Container fluid className="app_main ">
                    {children}
                </Container>
            </div>

        </>
    )
}

const App = () => {

    const {accessToken, loading} = useSelector(state=>state.auth)


    const history = useHistory()
    useEffect(() => {
        if(!loading && !accessToken){
             history.push('/watch')
        }
    }, [accessToken, loading])

    return(
    
            <Switch>
                <Route path="/" exact>
                    <Layout>
                        <Homescreen/>
                    </Layout>
                </Route>
                <Route path="/auth">
                    <LoginScreen/>
                </Route>
                <Route path='/search'>
                    <Layout>
                        <h1>Search Me</h1>
                    </Layout>
                </Route>
                <Route path='/watch'>
                    <Layout>
                        <WatchScreen/>
                    </Layout>
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
    )
}
export default App