<div id="togo" className='finshed-butns-container'>
<img src={require('./assets/light.svg')} width="100" className='light-icon'/>


<div className='contet-middel-container'>
<div className='copid-fade' style={{display: this.state.showCopyLg ? '' : 'none'}}>
    <p>Copied To Clipboard</p>
</div>
<div className='show-copy-container'>
    <p>Click To Copy url</p>
    <span className='arrow-cop'></span>
</div>
<div className='images-contaner'>
    <img style={{cursor: 'pointer'}} src={`${this.testUrl}&size=lg`} 
    className={this.state.clasn} onClick={this.copyLink.bind(this)} width='200'/>

    <img style={{cursor: 'pointer'}} src={`${this.testUrl}&size=md`} 
    onClick={this.copyLinkMd.bind(this)} width='150'/>

    <img 
    onClick={this.copyLinkSm.bind(this)}
     style={{cursor: 'pointer'}} 
     src={`${this.testUrl}&size=sm`} width='100'/>

</div>
<div className='inter-sa'>
    <div className='l-section'>
        <h2>USAGE</h2>
        <p>This url allows you call this button from any where.</p>
        <p>Example: in your project README.md on github, you can add this line to call it</p>
        <p><code>[![alt somthing](http://the_url_you_copied)](here the link on click)</code></p>
    </div>
    <img src={require('./assets/ok.svg')} width="100" className='ok-icon'/>
</div>
<img src={require('./assets/quality.svg')} width="150" className='quality-icon'/>
</div>
</div>