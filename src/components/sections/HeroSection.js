import { Description } from "@mui/icons-material";
import React from "react";
import TextAnimation from "../animations/TextAnimation";

function HeroSection() {
    return (
        <Wrapper>
            <WaveBackground>
                <ContenWrapper>
                    <TextWrapper>
                        <Title>
                            Design
                            <br/>and code <TextAnimation/>
                        </Title>
                        <Description>
                            fgzdgaehsjdcmvhgkjhrdfcewsfdfc
                        </Description>
                        <PurchaseButton
                            title="Start learning"
                            subtitle="120+ hours bdfh"
                        />
                    </TextWrapper>
                </ContenWrapper>
            </WaveBackground>
        </Wrapper>
    )
}