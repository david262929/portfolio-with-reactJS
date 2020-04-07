import React, {Component} from 'react';
import './styles/about.scss';

class About extends Component {
    constructor() {
        super();
        this.usedImageIds = [];
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name] : value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const allMemeImgs = this.state.allMemeImgs;
        let imgUrl;
        while(!imgUrl){
            const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
            const memeImg = allMemeImgs[randNum];
            const {id} = memeImg;

            if(!allMemeImgs.includes(id)){
                this.usedImageIds.push(id);
                imgUrl = memeImg.url;
            }
        }
        this.setState({ randomImg : imgUrl});
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({ allMemeImgs : memes });
            })
    }

    render() {
        return (
            <div className="meme-generator">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <div className="inputs">
                        <input
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                    </div>
                    {/*<h1>{this.state.topText + this.state.bottomText}</h1>*/}
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default About;
