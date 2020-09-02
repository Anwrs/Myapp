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
                href='/'
                >
                <h1>MyApp</h1>
                </EuiHeaderLogo>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                                <EuiHeaderLinks>
                                    <EuiHeaderLink href='http://anwrs.github.io/Myapp/'>
                                        Home
                                    </EuiHeaderLink>

                                    <EuiHeaderLink href="Shop" iconType='analyzeEvent'>
                                        Shop
                                    </EuiHeaderLink>

                                    <EuiHeaderSectionItem>
                                        <EuiHeaderLink href='Help' iconType='iInCircle'>
                                            Help
                                        </EuiHeaderLink>
                                    </EuiHeaderSectionItem>
                                </EuiHeaderLinks>
            </EuiHeaderSectionItem>


        </EuiHeader>
    )
};

export default Header;
