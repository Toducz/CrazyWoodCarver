import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { actionJoinGroup } from "../actions/group.action";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class JoinNewGame extends Component {
    constructor(props) {
        super(props);
        //this.handleLogin = this.handleLogin.bind(this);
        this.handleJoinNewGroup = this.handleJoinNewGroup.bind(this);
        this.onChangeGroupCode = this.onChangeGroupCode.bind(this);

        this.state = {
            groupCode: ""
        };
    }

    onChangeGroupCode(e) {
        this.setState({
            groupCode: e.target.value
        });
    }

    handleJoinNewGroup(e) {
        e.preventDefault();

        this.form.validateAll();

        const { dispatch } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(actionJoinGroup(this.state.groupCode))
        }
  
    }

    render() {
        const { message } = this.props;

        return (
            <div className="col-md-12">
                <div className="card card-container">

                    <Form
                        onSubmit={this.handleJoinNewGroup}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="username">Group code</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.groupCode}
                                onChange={this.onChangeGroupCode}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                            >
                            <span>Join to group</span>
                            </button>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={(c) => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message
    };
}

export default connect(mapStateToProps)(JoinNewGame);
