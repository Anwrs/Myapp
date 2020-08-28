import React from 'react';

import {
    EuiPanel,
    EuiText,
    EuiSpacer
} from '@elastic/eui';

const Error = () => {

    return (
        <div>
            <EuiSpacer size='xxl'></EuiSpacer>
            <EuiPanel>
                <EuiText textAlign='center'>
                    <h1>404 Error: Page not found</h1>
                </EuiText>
            </EuiPanel>
            <EuiSpacer></EuiSpacer>
        </div>
    );
}

export default Error;