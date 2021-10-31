import {Component} from 'react';

import createElement from '~/util/createElement';

const [div, h2, span, img, em] = ['div', 'h2', 'span', 'img', 'em'].map(createElement);

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return div({
            className: 'imagecomponent'
        },
            h2({
                className: 'pagetitle'
            }, 'Image Component'),
            div({
                className: 'img-tag-image'
            },
                span({}, 'Image in <img>-tag'),
                img({
                    src: '/assets/images/incognitocat.png'
                }),
                em({}, 'I see you but you can\'t see me')
            ),
            div({
                className: 'background-image'
            },
                em({}, 'Image in CSS background')
            )
        );
    }
}

export default ImageComponent;
