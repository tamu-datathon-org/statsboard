import 'bootstrap-css-only/css/bootstrap.min.css';

import React, { Component } from 'react'
import Head from '../components/head'
import { Row, Container, Col } from 'reactstrap'

// Rendered in the body
export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    static getInitialProps({ req, res }) {
        // this function returns the default props that this component should expect and can do the necessary auth checks
        // req, res are only available on server side (when next js is rendering the page on server, always perform null check with this in mind)
        // also never call mongodb directly from here always use fetch to call an api
        return {}
    }

    render() {
        return (
            <div>
                <Head title="Home" />
                <Container>
                    <Row style={{ justifyContent: 'center', paddingTop: '3em' }}>
                        <Col md="6" sm="12">
                            <h2>stats.datathon.com</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}