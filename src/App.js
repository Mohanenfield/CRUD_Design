import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Posts from "./Posts";

function App() {
    return (
        <BrowserRouter>
            <Table striped bordered hover>
                <thead>
                    <th><Link to="/posts">Posts</Link></th>
                </thead>
            </Table>
            <Switch>
                <Route path="/posts">
                    <Posts />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;