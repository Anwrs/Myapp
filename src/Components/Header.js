import React from 'react';
import {
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLinks,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
  } from '@elastic/eui';

function Header() {
    return (
        <EuiHeader>
            <EuiHeaderSectionItem>
                <EuiHeaderLogo
                iconType='logoMetrics'
                href='index.html'
                >
                <h1>MyApp</h1>
                </EuiHeaderLogo>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
             
                                <EuiHeaderLinks>
                                    <EuiHeaderLink isActive>
                                        Home
                                    </EuiHeaderLink>

                                    <EuiHeaderLink href="#" iconType='analyzeEvent'>
                                        Shop
                                    </EuiHeaderLink>

                                    <EuiHeaderSectionItem>
                                        <EuiHeaderLink href='#' iconType='iInCircle'>
                                            Help
                                        </EuiHeaderLink>
                                    </EuiHeaderSectionItem>
                                </EuiHeaderLinks>
            </EuiHeaderSectionItem>


        </EuiHeader>
    )
};

export default Header;
