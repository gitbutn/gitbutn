import React, { Component } from 'react';
import Button from './App';
import './App.css'
import Header from './components/Header/Header';
import Cookies from 'universal-cookie';
import Footer from './components/Fotter/Fotter';
import Hint from './components/Hint/Hint';
import Pattrens from './components/Pattrens/Pattrens';
import Badge from './components/Badges/Badges';
import Flag from './components/Flags/Flags';
import Buttny from './components/Smallbtn/Smallbtn';
import Lottie from 'react-lottie';
import * as loadingLogo from './assets/logoani.json';
import ShowHelper from './components/ShowHelper/ShowHelper';

const cookie = new Cookies();

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUrl: '',
            clasn: '',
            showCopyLg: false,
            showCopyMd: false,
            showCopySm: false,
            animationType: 'showCopyFade',
            cln: 'a-scroll a-borderw',
            cln2: 'a-borderw',
            type: 'newbadge',
            showLoading: true,
        }

        this.urlForGitButn = `https://img.gitbutn.io/svg`;
        this.testUrl = "https://img.gitbutn.io/svg?&title=Gitbutn&sub=Saleh%20jarad&icon=github&icx=ffffff&ibgx=8779d2&tcx=352d86&tbgx=b3bee6&scx=4062bf";
    }



    componentDidMount(){
            this.setState({
                type: this.props.location.state !== undefined ? this.props.location.state.item : 'newbadge',
                run: true
            })

        let load = cookie.get('load');
        // cookie.remove('load')
        if(load !== 'done') {
            cookie.set('load', 'done', { maxAge: 86400 })
            this.setState({
                showLoading: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showLoading: false
                    })
                }, 2500)
            })
        } else {
            this.setState({
                showLoading: false
            })
        }
    }


      onClickHint(e){
        switch(e) {
            case 'newbtn':
                return this.setState({ type: 'newbtn' });
            case 'newbadge':
                return this.setState({ type: 'newbadge' });
            case 'newhint':
                return this.setState({ type: 'newhint' });
            case 'newbtn':
                return this.setState({ type: 'newbtn' });
            case 'btn':
                return this.setState({ type: 'btn' });
            case 'newflag':
                return this.setState({ type: 'newflag' });
        }
      }

      renderCreater(){
          switch(this.state.type) {
            case 'newhint':
                return <Hint />
            case 'newbadge':
                return <Badge />
            case 'newflag':
                return <Flag />
            case 'btn':
                return <Buttny />
            case 'netbtn':
                return <Button data={e => this.handelFata(e)}/>
            default:
                return <Button data={e => this.handelFata(e)}/>
        
          }
      }



    render(){
        const { steps, run } = this.state;
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: loadingLogo,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
        return(
            <div>
            {!this.state.showLoading ?
            <div className='main-app-container'>
            <ShowHelper />
            <div className='show-if-br'>
            <Pattrens />
                <Header all={true}
                onClickHint={this.onClickHint.bind(this)}
                />
                <div className='components-holder'>
                    {this.renderCreater(this.state.type)}
                </div>
                <Footer onClickHint={this.onClickHint.bind(this)}/>
            </div>
            </div>
            :
            <div className='loading-screen'>
          <Lottie
            options={defaultOptions}
            height={70}
            width={70}
            isStopped={false}
            isPaused={false}
          />
            </div>
        }
        </div>
        );
    }
}