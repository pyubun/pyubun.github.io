const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,//列表默认折叠
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listMaxHeight: 90,//列表最大高度
    lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: 'You', //音频名称
            artist: 'Approaching Nirvana', //音频艺术家
            url: 'http://m10.music.126.net/20200327125228/8c291315e02fefbf6637bf518a65cf44/ymusic/268d/7f39/9d1f/b2e11b3e86ea6c6108cca9d882af3f9d.mp3', //音频外链
            cover: 'http://p1.music.126.net/4d8hnmrMxDrKnn_0i1JqyA==/1728432278871211.jpg?param=130y130', //音频封面
            lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
            //theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '一个', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '陈壹千',
            url: 'http://music.163.com/song/media/outer/url?id=1374489910.mp3',
            cover: 'http://p1.music.126.net/sXy5JG7T4wpElwbbCc4oxw==/109951164177437119.jpg?param=300x300',
            lrc: '一个-陈壹千.lrc',
        }
        {
            name: 'See You Again', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'Charlie Puth',
            url: 'http://ws.stream.qqmusic.qq.com/C400001lBsjm30bKJm.m4a?guid=162223333&vkey=9A0B3C00DEFB2407D63926BF27E529BD837D04BB005BDB37EA2E226D4C36FC00E99C4257764B32C7C32EABBD6190202B9F8BC13EC6628874&uin=0&fromtag=66',
            cover: 'http://p2.music.126.net/JIc9X91OSH-7fUZqVfQXAQ==/7731765766799133.jpg?param=300x300',
            lrc: 'See You Again-Wiz Khalifa,Charlie Puth.lrc',
        }
        {
            name: '失眠飞行', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '接个吻，开一枪,沈以诚,薛明媛',
            url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
            cover: 'http://p2.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=300x300',
            lrc: '失眠飞行-接个吻，开一枪,沈以诚,薛明媛.lrc',
        }
    ]
});
<!-- 根据封面自适应主题色 -->
const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (data) => {
    setTheme(data.index);
});
