import React, {Component} from 'react';
import PDF_URL from "../cv/DavidGhazaryan-resume-en.pdf";
import API_PATH from "../api/contact.php";
import './styles/contact.scss';

const trim = (inString) => {
    return inString.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};
const regx = /^([a-z0-9_\-.])+@([a-z0-9_\-.])+\.([a-z]{2,4})$/i;
const defaultFormDataTemplate = {
    value: '',
    haveError: false,
};
const defaultState = {
    message: ``,
    messageType: ``,
    haveError: false,
    isShowContactForm: false,
    name: defaultFormDataTemplate,
    email: defaultFormDataTemplate,
    comment: defaultFormDataTemplate,
}
const messages = {
    success: `Your message has been sent. Thank you!`,
    danger: `Fill input areas correct & try again.`,
};

class Contact extends Component {
    constructor() {
        super();
        this.state = defaultState;
        this.handleFormToggler = this.handleFormToggler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormToggler() {
        const isShowContactForm = !this.state.isShowContactForm;
        let state = {isShowContactForm: isShowContactForm};
        if (!isShowContactForm) {
            state = {...defaultState, ...state}
        }
        this.setState(state);
    }

    handleChange(event) {
        let state;
        let haveError = false;
        let {name, value} = event.target;

        switch (name) {
            case 'name':
            case 'comment':
                haveError = (trim(value) === '');
                break;
            case 'email':
                haveError = !regx.test(trim(value)) || trim(value) === '';
                break;
            default:
                return;
        }

        state = {
            [name]: {value, haveError},
            haveError,
        };

        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        let state;
        const haveError =
            this.state.name.haveError || !this.state.email.value
            || this.state.comment.haveError || !this.state.name.value
            || this.state.email.haveError || !this.state.comment.value;

        const messageType = haveError ? 'danger' : 'success';
        const message = messages[messageType];


        this.setState({
            message,
            messageType,
        });

        if (!haveError) {
            console.log(message, this.state);
            fetch(`${API_PATH}?name=${this.state.name.value}&email=${this.state.email.value}&comment=${encodeURIComponent(this.state.comment.value)}`)
                .then(response => {
                    console.log(response);
                    // const {memes} = response.data;
                    // this.setState({ allMemeImgs : memes });
                })
        }
        // .then(response => response.json())

    }

    // componentDidMount() {
    //     fetch('https://api.imgflip.com/get_memes')
    //         .then(response => response.json())
    //         .then(response => {
    //             const {memes} = response.data;
    //             this.setState({ allMemeImgs : memes });
    //         })
    // }

    render() {
        return (
            <div className="contact-download-buttons">
                <span className="btn btn-cta-primary" id='contact_me' onClick={this.handleFormToggler}>
                    <i className="fa fa-paper-plane"></i> Contact Me
                </span>
                <span className="btn btn-cta-primary" href={PDF_URL} id='download_cv' download>
                    <i className="fa fa-download"></i> Download CV
                </span>

                <div className={"contact-me-class" + (this.state.isShowContactForm ? " show " : "")} id="contact_modal">
                    <i className="fa fa-close close-it" id='closeContact' onClick={() => {
                        this.setState({isShowContactForm: false})
                    }}></i>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className={"done" + (!!this.state.message && this.state.message !== '' ? " show " : "")}>
                                <div className={"alert alert-" + this.state.messageType}>
                                    {this.state.message}
                                </div>
                            </div>
                            <form method="post" action="" className="contact-form">
                                <div className="form">
                                    <input type="text" name="name" placeholder="Your Name *"
                                           onChange={this.handleChange}
                                           className={this.state.name.haveError ? " error " : ""}
                                           value={this.state.name.value}/>
                                    <input type="email" name="email" placeholder="Your E-mail Address *"
                                           onChange={this.handleChange}
                                           className={this.state.email.haveError ? " error " : ""}
                                           value={this.state.email.value}/>
                                    <textarea name="comment" rows="7" placeholder="Type your Message *"
                                              onChange={this.handleChange}
                                              className={this.state.comment.haveError ? " error " : ""}
                                              value={this.state.comment.value}/>
                                    <input type="submit" id="submit" className="clearfix btn" value="Send"
                                           onClick={this.handleSubmit}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
