import React, { Component } from 'react';
import {
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLinks,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
  } from '@elastic/eui';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Error from './components/Error';
import Navigation from './components/Navigation';
  

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
                <BrowserRouter>
                    <div>
                        <Navigation />
                            <Switch>
             
                                <EuiHeaderLinks>
                                    <EuiHeaderLink isActive>
                                        <Route path="/" component={Home} exact/> 
                                    </EuiHeaderLink>

                                    <EuiHeaderLink href="#" iconType='analyzeEvent'>
                                        <Route path="/about" component={Shop}/>
                                    </EuiHeaderLink>

                                    <EuiHeaderSectionItem>
                                        <EuiHeaderLink href='#' iconType='iInCircle'>
                                            Help
                                        </EuiHeaderLink>

                                    
                                    </EuiHeaderSectionItem>

                                </EuiHeaderLinks>

                        <Route component={Error}/>
                        </Switch>
                    </div> 
                </BrowserRouter>
            </EuiHeaderSectionItem>


        </EuiHeader>
    )
};

export default Header;
