import React from 'react';

import {
    EuiPanel,
    EuiSpacer,
    EuiText
} from '@elastic/eui';

function Footer() {
    return(
        <div>
            <EuiSpacer></EuiSpacer>
            <EuiPanel>
                <EuiText textAlign='center'>
                    <h2>&copy; Copyright MyApp 2020</h2>
                </EuiText>
            </EuiPanel>
        </div>
    );
}

export default Footer;