var myFullpage = new fullpage('#fullpage', {
    anchors: ['content1', 'content2', 'content3', 'content4', 'content5'],
    menu: '#menu',
    navigation: false,
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    responsiveWidth: 900,
    afterResponsive: function(isResponsive){

    }

});