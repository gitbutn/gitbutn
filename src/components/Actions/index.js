const url = 'https://img.gitbutn.io';


const button = (list) => {
    let urlw = `${url}/button/?&title=${list.title}&sub=${list.sub}&icon=${list.icon}&ico=${list.ico}&lco=${list.lco}&rco=${list.rco}&tc=${list.tc}&sc=${list.sc}&size=${list.size}`;
    return new Promise((res, rej) => {
        fetch('https://u.gitbutn.io/new', {
            method: 'POST',
            headers: {"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({longUrl: urlw})
        }).then((data) => data.json())
        .then((newData) => {
            if(!newData) {
                rej('error1')
            }
            res(newData.shortUrl)
        }).catch((e) => {
            rej('error2', e)
        })
    });
};

const hint = (list) => {
    let uri = `${url}/hint/?&txt=${list.txt}&type=${list.type}`;
    return new Promise((res, rej) => {
        fetch('https://u.gitbutn.io/new', {
            method: 'POST',
            headers: {"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({longUrl: uri})
        }).then((data) => data.json())
        .then((newData) => {
            if(!newData) {
                rej('Error!')
            }
            res(newData.shortUrl)
        }).catch((e) => {
            rej('error2', e)
        })
    });
};

const badge = (list) => {
    let uri = `${url}/badge/?&title=${list.title}&sub=${list.sub}&icon=${list.icon}&lco=${list.lco}&rco=${list.rco}&ltc=${list.ltc}&rtc=${list.rtc}&ver=${list.ver}`;
    return new Promise((res, rej) => {
        fetch('https://u.gitbutn.io/new', {
            method: 'POST',
            headers: {"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({longUrl: uri})
        }).then((data) => data.json())
        .then((newData) => {
            if(!newData) {
                rej('Error!')
            }
            res(newData.shortUrl)
        }).catch((e) => {
            rej('error2', e)
        })
    });
};


const flag = (list) => {
    let uri = `${url}/flag/?&flag=${list.flag}&fc=${list.fc}&bgc=${list.bgc}`;
    return new Promise((res, rej) => {
        fetch('https://u.gitbutn.io/new', {
            method: 'POST',
            headers: {"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({longUrl: uri})
        }).then((data) => data.json())
        .then((newData) => {
            if(!newData) {
                rej('Error!')
            }
            res(newData.shortUrl)
        }).catch((e) => {
            rej('error2', e)
        })
    });
};

const btn = (list) => {
    let uri = `${url}/btn/?&icon=${list.icon}&ico=${list.ico}&bgc=${list.bgc}`;
    return new Promise((res, rej) => {
        fetch('https://u.gitbutn.io/new', {
            method: 'POST',
            headers: {"content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({longUrl: uri})
        }).then((data) => data.json())
        .then((newData) => {
            if(!newData) {
                rej('Error!')
            }
            res(newData.shortUrl)
        }).catch((e) => {
            rej('error2', e)
        })
    });
};

export const checkType = (type, list) => {
        switch(type) {
            case 'button':
                return button(list);
            case 'hint':
                return hint(list);
            case 'badge':
                return badge(list);
            case 'flag':
                return flag(list);
            case 'btn':
                return btn(list)
            default:
                return ''
        }
};