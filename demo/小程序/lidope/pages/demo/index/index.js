Page({
    data: {
        navigator: [
        {
            name: 'iView',
            url: '/pages/demo/index/index',
            background: ''
        },
        {
            name: '动态头像背景',
            url: '/pages/demo/avatar/index',
            background: ''
        },
        {
            name: 'movable-view',
            url: '/pages/demo/movable-view/index',
            background: ''
        },
        {
            name: 'rich-text',
            url: '/pages/demo/rich-text/index',
            background: ''
        }],
    },

    onReady: function () {
        this.navigator();
    },

    navigator: function () {
        var _this = this;
        var navigator = this.data.navigator;

        navigator.forEach(function (ele, index) {
            ele.background = _this.backgroundRandom();
        });

        this.setData({
            navigator: navigator
        });
    },


    backgroundRandom: function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ', ' + g + ', ' + b + ")";
    },
})