import {Component} from 'react';
import {connect} from 'react-redux';

import createElement from '~/util/createElement';

const [div, h2] = ['div', 'h2'].map(createElement);

class StoreComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return div({
            className: 'storecomponent'
        },
            h2({
                className: 'pagetitle'
            }, 'Store Component')
        );
    }
}

const mapStateToProps = ({mainReducer}) => {
    return {
        isLoading: mainReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLoading: bool => dispatch(isLoading(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
