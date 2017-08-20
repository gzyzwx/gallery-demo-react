require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
// console.log(yeomanImage)

var imageDatas = require('../data/imageDatas.json')
// console.log(imageDatas)
// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

// console.log(imageDatas)
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">ddd</section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
