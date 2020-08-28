import React from 'react';
import {
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLinks,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
    EuiIcon,
  } from '@elastic/eui';
  

function Header() {
    return (
        <EuiHeader>
            <EuiHeaderSectionItem>
                <EuiHeaderLogo
                iconType='logoGolang'
                href='index.html'
                >
                <h2>MyApp Webshop</h2>
                </EuiHeaderLogo>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                <EuiHeaderLinks>
                    <EuiHeaderLink href='index.html' isActive>
                        Home 
                    </EuiHeaderLink>

                    <EuiHeaderLink href="#" iconType='shop'>
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
