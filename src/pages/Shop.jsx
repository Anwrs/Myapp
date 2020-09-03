import React from 'react';
import ItemData from '../Components/ItemData.json';
import './img.css' 

import {
   EuiPanel,
   EuiIcon,
   EuiFlexGroup,
   EuiFlexItem,
   EuiCard,
   EuiButton,
   EuiSpacer,
   EuiText,
   EuiFlexGrid,
} from '@elastic/eui';

const CardFooter = (
      <EuiFlexGroup justifyContent="flexEnd">
         <EuiFlexItem grow={false}>
            <EuiButton href="#">
               Shop <EuiIcon type="savedObjectsApp" ></EuiIcon>
            </EuiButton>
         </EuiFlexItem>
      </EuiFlexGroup>
)

 
const Shop = () => {
    return (
      <div>
         <EuiSpacer size='xxl'></EuiSpacer>
         <EuiText textAlign='center'>
            <h1>MyApp Webshop</h1>
            <p>At your service</p>
         </EuiText>
         <EuiPanel>
            <EuiFlexGroup gutterSize="l">
               <EuiFlexGrid columns={4} textAlign='center'>

                     { ItemData.map(post => {
                        return(
                           <EuiFlexItem key={ post.id }>
                              <EuiCard
                              textAlign="left"
                              title={ post.name }
                              description={ post.colors }
                              image={
                                 <div>
                                 <img className="CardImg"
                                    src={ process.env.PUBLIC_URL + post.url }
                                    alt="example-design"
                                    />
                              </div>
                              } 
                              footer= { CardFooter }
                              >
                              <p>Price: { post.price }</p>
                              </EuiCard>
                           </EuiFlexItem>
                        )
                     }) }
               </EuiFlexGrid>
            </EuiFlexGroup>
         </EuiPanel>
         <EuiSpacer></EuiSpacer>
      </div>
    );
}
 
export default Shop;