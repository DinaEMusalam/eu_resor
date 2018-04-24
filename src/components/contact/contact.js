import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="contact">
                <div className="container">
                    <div className="section-content">
                        <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                    </div>
                    <div className="contact-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 form-line">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputUsername">Your name</label>
                                        <input type="text" className="form-control" id="" placeholder=" Enter Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail">Email Address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telephone">Mobile No.</label>
                                        <input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="description"> Message</label>
                                        <textarea className="form-control" id="description" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div>

                                        <button type="button" className="btn btn-primary submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
