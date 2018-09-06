import React, { Component } from 'react';
import './Shorty.css';
import Header from '../Header/Header';
import { Copy, OpenWindow } from '../Icons/CopyAndOpen';
import Footer from '../Fotter/Fotter';
import Anmi from 'react-lottie';
import * as successBtn from '../../assets/sja.json';

export default class Shorty extends Component {
    constructor(props){
        super(props);

        this.state = {
            longUrl: '',
            showShort: false,
            error: false,
            shortUrl: ''
        }
    }

    onChangeUrl(e) {
        this.setState({
            longUrl: e.target.value
        });
    }

    async shrinkIt() {
        this.setState({
            loading: true
        })
       const payload = {
           method: 'POST',
           body: JSON.stringify({ longUrl: this.state.longUrl }),
           headers: { "content-type":"application/json; charset=UTF-8" }
        }
        try {
            if(this.state.longUrl.length >= 20) {

            const postUrl = await fetch('https://u.gitbutn.io/new', payload)
            const data = await postUrl.json();
            const results = data;
            console.log(results);
            if(!results.shortUrl) {
                this.setState({
                    shortUrl: 'Make sure your link is valid',
                    error: true,
                    loading: false
                })
            }

            this.setState({
                shortUrl: results.shortUrl.split('://')[1],
                showShort: true,
                error: false,
                loading: false

            })
        } else {
            this.setState({
                shortUrl: 'Make sure your link is valid',
                longUrl: '',
                error: true,
                loading: false
            })
        }
        } catch(e) {
            this.setState({
                shortUrl: 'Make sure your link is valid',
                longUrl: '',
                error: true,
                loading: false

            })
        }

    }

    copyLink(){
        console.log('triigerd')
            var textField = document.createElement('textarea')
            textField.innerText = 'https://' + this.state.shortUrl
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove();
    }

    openLink(){
        window.open('http://' + this.state.shortUrl, '_blank')
    }

    onClickHint(e){
        this.props.history.push('/', {
            item: e
        })
    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: successBtn,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return(
            <div className='Shorty'>
            <div className='shorty-header'>
                <Header all={false}/>
            </div>
            <div className='shorty-container'>
                <div className='shorty-input-comp'>
                <h1>simplify your link</h1>
                <div className='input-shrinky'>
                    <input placeholder='URL: https://img.gitbutn.io/'
                        value={this.state.longUrl}
                        onChange={t => this.onChangeUrl(t)}
                    />
                    <button onClick={this.shrinkIt.bind(this)}>
                        {this.state.loading 
                        ? 
                            <Anmi options={defaultOptions}
                            height={20}
                            width={20}
                            isStopped={false}
                            isPaused={false}/>
                        :
                            'Shrinko'
                        }
                    </button>
                </div>
                <div className='holder-show-cao'>
                {this.state.showShort && !this.state.error ?
                <div className='shorty-short'>
                    <button onClick={this.copyLink.bind(this)}>
                        <Copy width='25' className='btn-img-sv'/>
                    </button>
                    
                    <p>{this.state.shortUrl}</p>

                    <button onClick={this.openLink.bind(this)}>
                        <OpenWindow width='20' className='btn-img-sv'/>
                    </button>
                    </div>
                :
                ''
                }
                {this.state.error && 
                <div className='shorty-short'>
                    <p style={{color: '#e84348'}}>{this.state.shortUrl}</p>
                </div>
                }
                </div>
                </div>
            </div>
            <Footer onClickHint={this.onClickHint.bind(this)}/>
            </div>
        );
    };
};
    