import React from 'react';

import {
   EuiPanel,
   EuiText,
   EuiSpacer
} from '@elastic/eui';
 
const Shop = () => {
    return (
      <div>
         <EuiSpacer size='xxl'></EuiSpacer>
         <EuiPanel>
            <EuiText textAlign='center'>
                  <h2>On this page you find our webshop, this will show you all our items.</h2>
            </EuiText>
         </EuiPanel>
         <EuiSpacer></EuiSpacer>
      </div>
    );
}
 
export default Shop;