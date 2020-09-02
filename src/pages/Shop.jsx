import React from 'react';
import Data from '../Components/Data.json';

import {
   EuiPanel,
   EuiText,
   EuiFlexGroup,
   EuiFlexItem,
   EuiCard,
   EuiButton,
   EuiSpacer,
   EuiFlexGrid
} from '@elastic/eui';

const cardFooterContent = (
   <EuiFlexGroup justifyContent="flexEnd">
     <EuiFlexItem grow={false}>
       <EuiButton>Go for it</EuiButton>
     </EuiFlexItem>
   </EuiFlexGroup>
 );
 
const Shop = () => {
    return (
      <div>
         <EuiSpacer size='xxl'></EuiSpacer>
         <EuiPanel>
            <EuiFlexGroup gutterSize="l">
               <EuiFlexGrid columns={4} textAlign='center'>
                  <EuiFlexItem>
                     <EuiCard
                     textAlign="left"
                     image={
                        <div>
                        <img
                           width="20px"
                           src="https://source.unsplash.com/400x200/?Nature"
                           alt="Nature"
                           />
                     </div>
                     }
                     title="Elastic in Nature"
                     description="Example of a card's description. Stick to one or two sentences."
                     footer={cardFooterContent}
                     >
                     </EuiCard>
                  </EuiFlexItem>
                  <EuiFlexItem>
                     <EuiCard
                     textAlign="left"
                     image={
                        <div>
                        <img
                           width="20px"
                           src="https://source.unsplash.com/400x200/?Nature"
                           alt="Nature"
                           />
                     </div>
                     }
                     title="Elastic in Nature"
                     description="Example of a card's description. Stick to one or two sentences."
                     footer={cardFooterContent}
                     >
                     </EuiCard>
                  </EuiFlexItem>
                  <EuiFlexItem>
                     <EuiCard
                     textAlign="left"
                     image={
                        <div>
                        <img
                           width="20px"
                           src="https://source.unsplash.com/400x200/?Nature"
                           alt="Nature"
                           />
                     </div>
                     }
                     title="Elastic in Nature"
                     description="Example of a card's description. Stick to one or two sentences."
                     footer={cardFooterContent}
                     >
                     </EuiCard>
                  </EuiFlexItem>
                  <EuiFlexItem>
                     <EuiCard
                     textAlign="left"
                     image={
                        <div>
                        <img
                           width="20px"
                           src="https://source.unsplash.com/400x200/?Nature"
                           alt="Nature"
                           />
                     </div>
                     }
                     title="Elastic in Nature"
                     description="Example of a card's description. Stick to one or two sentences."
                     footer={cardFooterContent}
                     >
                     </EuiCard>
                  </EuiFlexItem>
               </EuiFlexGrid>
            </EuiFlexGroup>
         </EuiPanel>
         <EuiSpacer></EuiSpacer>
      </div>
    );
}
 
export default Shop;