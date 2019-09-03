

const WW = window.innerWidth;
const WH = window.innerHeight;
const bgC = '#873fda';

let spotParent = document.getElementById('spots');
let skillsEl = document.querySelector('#intro .skills');
let skillsBarWidth = skillsEl.offsetWidth;
const desBG = ['f03b3b', '4f4b63', '1fa853', '323fad', '873fda'];
console.warn(skillsBarWidth);


// let theSpot = mainProcess.queryFirstSpot().theSpot;
// theSpot.style.opacity = '0.8';
const spotDisappearValue = ['-' + WH, '' + WH, '-' + WW, '' + WW];

let swordSvg = document.querySelector('#sword svg');
let spotsParent = document.getElementById('spots');
let spotsTimeLine = anime.timeline({
    targets: '#spots div',
    delay: anime.stagger(200, {grid: [14, 3], from: 'center'}),
});
let spotsTimeLineFit = {};
let animationComplex = function(){
    swordSvg.parentElement.style.zIndex = '-50';
    spotsParent.style.borderColor = '#f9f9f9';
    
    //this.parentElement.style.backgroundColor = '#f64956';
    spotsTimeLine.add({
        opacity: 0.9,
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        
    })
    .add({
        top: function(){       
            return spotDisappearValue[Math.round(Math.random())];
        },
        left: function(){
            return spotDisappearValue[Math.round(Math.random())+2];
        },
        easing: 'easeOutSine',
        delay: 0,
        duration: function(){
            return anime.random(500, 1000)
        },
    });
    // .add({
    //     // targets: '#spots div',
    //     left: 0,
    //     top: 0,
    //     duration: function(){
    //         return anime.random(500, 1200)
    //     },
    //     // endDelay: 6000
    // });
    // spotsTimeLine.complete = function(){
    //     spotsTimeLineFit = anime.timeline({
    //         targets: '#spots div',
    //         delay: anime.stagger(200, {grid: [14, 3], from: 'center'}),
    //         direction: 'normal',
    //         loop: true,
    //     })
    //     spotsTimeLineFit.add({
    //         top: function(){       
    //             return spotDisappearValue[Math.round(Math.random())];
    //         },
    //         left: function(){
    //             return spotDisappearValue[Math.round(Math.random())+2];
    //         },
    //         easing: 'easeOutSine',
    //         duration: function(){
    //             return anime.random(500, 1000)
    //         },
    //     })
    //     .add({
    //         // targets: '#spots div',
    //         left: 0,
    //         top: 0,
    //         duration: function(){
    //             return anime.random(1000, 1500)
    //         },
    //         endDelay: 6000
    //     })
    // }
    spotsTimeLine.complete = function(){
        anime({
            targets: '#me-svg path',
            easing: 'easeInOutSine',
            duration: 2000,
            direction: 'alternate',
            loop: true,
            strokeDashoffset: [anime.setDashoffset, 0],
        });
        anime({
            targets: '#me',
            right: '0%'
        })
    }
    // spotsTimeLine.complete = function(){
    //     intro.style.zIndex = '-1';
    //     document.querySelector('#sword svg').style.visibility = 'visible';
    //     anime({           
    //         targets: '#sword path',
    //         easing: 'easeInOutSine',
    //         duration: 2000,
    //         delay: 0,
    //         direction: 'pause',
    //         // loop: true,
    //         strokeDashoffset: [anime.setDashoffset, 0],
    //         stroke: '#ffffff',
    //     })
    // }
    let fadeBackground = anime({
        targets: '#fadeBackground',
        // easing: 'easeInOutSine',
        duration: 1000,
        top: '0%',
        backgroundColor: bgC
    })
    //console.warn(fadeBackground);
    fadeBackground.complete = function(){
        // canvas.style.display = 'block';
        console.warn('done');
        // let coverScroll = document.querySelector('#intro .coverScroll');
        // coverScroll.style.backgroundColor = bgC;
        // coverScroll.style.display = 'block';
        let containerShow = anime.timeline({
            targets: '#intro .skills',
            left: '0%',
            delay: 0,
            duration: 800
        })
        containerShow.add({
            targets: '#intro .skillsContainer',
            left: '0%',
            duration: function(){
                return anime.random(1000, 1500)
            }
        })
        anime({
            targets: '#spots',
            width: WW-skillsBarWidth,
            duration: 1200
        })
        containerShow.complete = function(){
            skillsSection.addEventListener('mousedown', function(e){
                e.stopPropagation();
                // console.warn(e.target);
                // console.warn(e.target.hasAttributes('src'));
                anime({
                    // targets: '#fadeBackground',
                    targets: '#me',
                    backgroundColor: function(){
                        return desBG[Math.round(Math.random()*desBG.length)];
                    }
                })
                if(e.target.hasAttributes('src')){
                    anime({
                        // targets: '#fadeBackground',
                        targets: '#me',
                        backgroundColor: function(){
                            return '#' + desBG[Math.round(Math.random()*desBG.length)];
                        },
                        duration: 1200
                    })
                }
                mpYLast = e.screenY;
                 
            })
            skillsSection.addEventListener('mouseup', function(e){
                topR += (e.screenY - mpYLast);
                anime({
                    targets: '#intro .skillsContainer',
                    easing: 'easeOutSine',
                    // duration: 300,
                    top: topR*6,   
                    // backgroundColor: '#3f3f3f'
                })
                return false;
                // console.warn(e);
            })
            // skillsSection.addEventListener('click', function(e){
            //     if(e.target.hasAttributes('src')){
            //         spotsTimeLineFit.add({
            //             top: function(){       
            //                 return spotDisappearValue[Math.round(Math.random())];
            //             },
            //             left: function(){
            //                 return spotDisappearValue[Math.round(Math.random())+2];
            //             },
            //             delay: 0,
            //             duration: function(){
            //                 return anime.random(500, 1000)
            //             },
            //         })
                    
            //         // .add({
            //         //     left: 0,
            //         //     top: 0,
            //         //     duration: function(){
            //         //         return anime.random(500, 1200)
            //         //     }
            //         // })
            //     }
            // })
            skillsSection.addEventListener('touchstart', function(){
                anime({
                    // targets: '#fadeBackground',
                    targets: '#me',
                    backgroundColor: function(){
                        return '#' + desBG[Math.round(Math.random()*desBG.length)];
                    }
                })
            })
        }
    }
}
swordSvg.addEventListener('click', function(){
    animationComplex.call(this);
})
let canvas = document.getElementById('canvas');
let intro = document.getElementById('intro');
let pixiCanvasResize = document.getElementById('spots');
// let canvasView = new PIXI.Application({view: canvas, resizeTo:pixiCanvasResize, backgroundColor: 0x873fda});

//let svgAnimeTarget = document.querySelector('#this-svg');
// anime({
//     targets: '#this-svg',
//     opacity: 1,
//     duration: 2000,
//     direction: 'pause'
// })
// let animation = anime.timeline({
//     targets: '#this-svg .cls-1',
//     easing: 'easeInOutSine',
//     duration: 2000,
//     delay: function(el, i) { return i * 100 },
//     direction: 'pause',
//     // loop: true  
// })
// animation.add({
//     strokeDashoffset: [anime.setDashoffset, 0],
//     stroke: '#7f23bd',
// })
let mainProcess = {
    queryFirstSpot :function(){
        let spotParent = document.getElementById('spots');
        return{
            theSpot: spotParent.children[Math.round(Math.random()*spotParent.children.length-1)]
        }
    }
}

    



// console.warn(animation);

//main vue render
let vueRender = function(){
    let tapPointsVM = new Vue({
        el: '#spots',
        data: {
            spots: new Array(42)
        }
    });
    let skillsList = ['javascript', 'node', 'html5', 'css3', 'http', 'typescript', 'es6', 'vue', 'npm', 'webpack', 'gulp', 'github', 'java', 'c', 'svg', 'json', 'vscode', 'chrome', 'weex', 'webgl', 'webassembly', 'powershell', 'ps', 'ai']
    let skillsIconVM = new Vue({
        el: '#intro .skills',
        data: {
            svgURL: []
        },
    });
    for(let i=0; i<skillsList.length; i++){
        skillsIconVM.$data.svgURL.push('./dist/svg/' + skillsList[i] + '.svg');
    }
}
vueRender();





// theSpot.addEventListener('mousedown', function(){
    
//     console.warn(this.parentElement);
//     this.parentElement.style.borderColor = '#f9f9f9';
//     //this.parentElement.style.backgroundColor = '#f64956';
//     let spotsTimeLine = anime.timeline({
//         targets: '#spots div',
//         delay: anime.stagger(200, {grid: [14, 3], from: 'center'}),
//     });
//     spotsTimeLine.add({
//         opacity: 0.9,
//         scale: [
//             {value: .1, easing: 'easeOutSine', duration: 400},
//             {value: 1, easing: 'easeInOutQuad', duration: 1000}
//         ],
        
//     })
//     .add({
//         top: function(){       
//             return spotDisappearValue[Math.round(Math.random())];
//         },
//         easing: 'easeOutSine',
//         delay: 0,
//         duration: function(){
//             return anime.random(500, 100)
//         }
//     })
//     spotsTimeLine.complete = function(){
//         intro.style.zIndex = '-1';
//         document.querySelector('#sword svg').style.visibility = 'visible';
//         anime({           
//             targets: '#sword path',
//             easing: 'easeInOutSine',
//             duration: 2000,
//             delay: 0,
//             direction: 'pause',
//             // loop: true,
//             strokeDashoffset: [anime.setDashoffset, 0],
//             stroke: '#ffffff',
//         })
//     }
//     let fadeBackground = anime({
//         targets: '#fadeBackground',
//         // easing: 'easeInOutSine',
//         duration: 1000,
//         top: '0%',
//         backgroundColor: bgC
//     })
//     //console.warn(fadeBackground);
//     fadeBackground.complete = function(){
//         canvas.style.display = 'block';
//         console.warn('done');
//         let coverScroll = document.querySelector('#intro .coverScroll');
//         coverScroll.style.backgroundColor = bgC;
//         coverScroll.style.display = 'block';
//         let containerShow = anime({
//             targets: '#intro .skillsContainer',
//             left: '0%',
//             delay: 0,
//             duration: function(){
//                 return anime.random(500, 1200)
//             }
//         })
//         containerShow.complete = function(){
//             skillsSection.addEventListener('mousedown', function(e){
//                 mpYLast = e.screenY;
//             })
//             skillsSection.addEventListener('mouseup', function(e){
//                 topR += (e.screenY - mpYLast);
//                 anime({
//                     targets: '#intro .skillsContainer',
//                     easing: 'easeOutSine',
//                     // duration: 300,
//                     top: topR*6,   
//                     // backgroundColor: '#3f3f3f'
//                 })
//                 // console.warn(e);
//             })
//         }
//     }
// })

let skillsSection = document.querySelector('#intro section');
let mpYLast = 0;
let topR = 0;

let changedPageY = 0;
let lastScrollTop = 0;
let dwonFlag = true;
// skillsSection.addEventListener('touchstart', function(e){
//     changedPageY = e.changedTouches[0].screenY;
// })
// skillsSection.addEventListener('touchmove', function(e){
//     e.preventDefault();
//     let t = e.changedTouches;
//     let distance = changedPageY - t[0].screenY;
//     skillsSection.scroll(0, lastScrollTop + distance);
//     //changedPageY -= t[0].screenY;
        
//         // console.warn(t[i].pageY);
//         // anime({
//         //     targets: '#intro .skillsContainer',
//         //     easing: 'linear',
//         //     // duration: 300,
//         //     top: changedPageY,   
//         //     // backgroundColor: '#3f3f3f'
//         // })
//         // //skillsSection.scroll(0, t[i].pageY);
//         // //console.warn(t[i].pageY);   
//         // changedPageY -= t[i].pageY*0.1;    
// })
// skillsSection.addEventListener('touchend', function(e){
//     console.warn(skillsSection.scrollTop);
//     lastScrollTop = skillsSection.scrollTop;
//     // let a = anime.timeline({
//     //     targets: '#intro section',
//     //     easing: 'easeInOutSine',
//     //     duration: 400
//     // });
//     // a.add({
//     //     top: '1%'
//     // })
//     // .add({
//     //     top: '0%'
//     // })
// })




// svgAnimeTarget.addEventListener('mousedown', function(){
//     anime({
//         targets: '#this-svg',
//         opacity: 0
//     })
//     let spots = document.querySelector('#spots');
//     spots.style.borderColor = '#000000';
//     anime({
//         targets: '#spots div',
//         scale: [
//           {value: .1, easing: 'easeOutSine', duration: 500},
//           {value: 1, easing: 'easeInOutQuad', duration: 1200}
//         ],
//         delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
//         opacity: 0.9,
//     });
// })

console.warn(this);