import React from 'react';

import {
    EuiPanel,
    EuiText,
    EuiSpacer
} from '@elastic/eui';

const Help = () => {
    return (
        <div>
            <EuiSpacer size='xxl'></EuiSpacer>
            <EuiPanel>
                <EuiText textAlign='center'>
                    <h2>On this page you will find information to contact us.</h2>
                </EuiText>
            </EuiPanel>
            <EuiSpacer></EuiSpacer>
        </div>
    );
}

export default Help;