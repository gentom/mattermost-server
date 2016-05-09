// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';

export default class Setting extends React.Component {
    render() {
        let marginClass;
        if (this.props.margin === 'small') {
            marginClass = ' form-group--small';
        }

        return (
            <div className={'form-group' + marginClass}>
                <label
                    className='control-label col-sm-4'
                >
                    {this.props.label}
                </label>
                <div className='col-sm-8'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Setting.defaultProps = {
};

Setting.propTypes = {
    label: React.PropTypes.node.isRequired,
    children: React.PropTypes.node.isRequired,
    margin: React.PropTypes.oneOf(['', 'small'])
};
