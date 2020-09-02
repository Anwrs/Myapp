import React from 'react';

import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
    EuiImage,
    EuiSpacer,
    EuiCard,
    EuiIcon,
    EuiFlexGroup,
    EuiFlexGrid,
    EuiFlexItem,
    EuiPanel,
    EuiLink
  } from '@elastic/eui';

  const ITEM_STYLE = { width: '425px' };
  
  const Home = () => (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle textAlign='center'>
                <h2>MyApp webshop for you</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
        <EuiPageContentBody>
            <EuiPanel>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iure rem voluptate numquam minima quo, provident nisi rerum. Officia asperiores tempora, animi fugit facilis fuga optio incidunt! Nesciunt, odio dignissimos.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequuntur accusantium veritatis necessitatibus cupiditate, dicta sapiente quas laborum, similique quae eius. Beatae cumque iusto repellendus quam aliquam non perspiciatis quas.
                </p>
            </EuiPanel>
        
        <EuiSpacer></EuiSpacer>
            
            <EuiFlexGroup gutterSize="l">
                <EuiFlexItem>
                    <EuiImage
                        hasShadow
                        alt="webshop_image"
                        url="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    />   
                </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer></EuiSpacer>

            <EuiPanel textAlign='center'>
                <EuiLink 
                href='/Shop'>
                    Check out our exclusive webshop!
                </EuiLink>
            </EuiPanel>

            <EuiSpacer></EuiSpacer>
                
                <EuiFlexGrid>
                    <EuiFlexItem style={ITEM_STYLE}>
                        <EuiCard component='div'
                            layout="horizontal"
                            icon={<EuiIcon size="xl" type={'logoBeats'} />}
                            title={'Elastic Beats'}
                            description="We use the best clothing materials!"
                        />
                    </EuiFlexItem>

                    <EuiFlexItem style={ITEM_STYLE}>
                        <EuiCard component='div'
                            layout="horizontal"
                            icon={<EuiIcon size="xl" type={'logoMaps'} />}
                            title={'Elastic Beats'}
                            description="Our delivery time is on point!"
                        />
                    </EuiFlexItem>
                
                    <EuiFlexItem style={ITEM_STYLE}>
                        <EuiCard component='div'
                            layout="horizontal"
                            icon={<EuiIcon size="xl" type={'logoObservability'} />}
                            title={'Elastic Beats'}
                            description="We like to keep our customers happy!"
                        />
                    </EuiFlexItem>

                    <EuiFlexItem style={ITEM_STYLE}>
                        <EuiCard component='div'
                            layout="horizontal"
                            icon={<EuiIcon size="xl" type={'logoElasticsearch'} />}
                            title={'Elastic Beats'}
                            description="Offering special prices!"
                        />
                    </EuiFlexItem>
                </EuiFlexGrid>
                

                

            

            </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );

export default Home;