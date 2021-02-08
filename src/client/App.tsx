import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import AllBooks from './views/AllBooks';
import CreateBook from './views/CreateBook';
import SingleBook from './views/SingleBook';
import EditBook from './views/EditBook';
import Login from './views/Login';
import Register from './views/Register';

const App: React.FC<AppProps> = () => {

    return (
        <BrowserRouter>
            <div className="container justify-content-center">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <h1>Welcome to our bookstore!</h1>
                    </Route>
                    <Route exact path="/books">
                        <AllBooks />
                    </Route>
                    <Route exact path="/books/new">
                        <CreateBook />
                    </Route>
                    <Route exact path="/books/edit/:id">
                        <Auth><EditBook /></Auth>
                    </Route>
                    <Route exact path="/books/:id">
                        <SingleBook />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

interface AppProps { };

export default App;