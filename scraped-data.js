const xRay = require('x-ray');

const x = xRay();
const URL = 'https://www.starterstory.com/';

module.exports = {
    getStories: () => {
        return new Promise((resolve, reject)=> {
            x(URL, 'div.story-tile', [{
                title: '.story-tile-title',
                revenue: '.story-tile-revenue span',
                description: '.story-tile-description'
            }])((err, stories)=> {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(stories);
                }
            })
        });
    }
}