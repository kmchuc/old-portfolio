import React from 'react';
import { Frame, Scroll, useCycle } from 'framer';
import kim_logo from '../images/kim_logo.svg';
import {
    LoadingpageContainer,
    LoadingpageRect,
    LogoContainer,
    InnerContainer,
    Logo,
    Kim,
    Online
} from './styled';

const Loadingpage = () => {
    return(
        <LoadingpageContainer>
            Loading Page
            <LoadingpageRect>
                <LogoContainer>
                    <InnerContainer>
                        <Logo src={kim_logo} alt="Kim's Logo" />
                        <Kim>Kim</Kim>
                        <Online>Online</Online>
                    </InnerContainer>
                </LogoContainer>
            </LoadingpageRect>
        </LoadingpageContainer>
    )
}

export default Loadingpage;