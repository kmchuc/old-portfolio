import React from 'react';
import {
    QuarantingContainer,
    QuarantingsTitle,
    QuarantingsDiv,
    ActivityTitle,
    ActivityList,
    PodcastTitle,
    SeparateDiv,
    HorizontalLine,
    LinkStyle
} from './styled';

const Quarantings = () => {
    return(
        <QuarantingContainer id='quaran-tings'>
            <QuarantingsTitle>
                Quanran-tings
            </QuarantingsTitle>
            <QuarantingsDiv>
                <ActivityTitle>things I've been listening to:</ActivityTitle>
                <ActivityList>
                    <SeparateDiv>
                        <p><PodcastTitle>In Defense of Plants Podcast:</PodcastTitle><LinkStyle href='https://open.spotify.com/show/6MigDotcNrEWm6j9NQurKb'>spotify</LinkStyle><br/><LinkStyle href='https://podcasts.apple.com/us/podcast/in-defense-of-plants-podcast/id1245995247'>apple</LinkStyle></p>
                        <p><PodcastTitle>Yeah, But Still (personal fave):</PodcastTitle><LinkStyle href='https://open.spotify.com/show/5fBiP4cooC1dvQNRkz0ioI?si=tCgH1t4hQjSt0iRPxREB6w'>spotify</LinkStyle><br/><LinkStyle href='https://podcasts.apple.com/us/podcast/yeah-but-still/id1304627947'>apple</LinkStyle></p>
                        <p><PodcastTitle>Bodega Boys:</PodcastTitle><LinkStyle href='https://open.spotify.com/show/2ZgrSa9Ar0EAdlitOiMC6r?si=j0OsPLZOQEi4zi2W5vBXDg'>spotify</LinkStyle><br/><LinkStyle href='https://podcasts.apple.com/us/podcast/bodega-boys/id1039621715'>apple</LinkStyle></p>
                    </SeparateDiv>
                    <SeparateDiv>
                        <p><PodcastTitle>Lemon Water:</PodcastTitle><LinkStyle href='https://open.spotify.com/show/4gjnC28LkBliv2Mogx35tp?si=iO0EW6_3QvGPN-nHrihEJg'>spotify</LinkStyle><br/><LinkStyle href='https://podcasts.apple.com/us/podcast/lemon-water/id1309952135'>apple</LinkStyle></p>
                        <p><PodcastTitle>Talking Sopranos:</PodcastTitle><LinkStyle href='https://open.spotify.com/show/5PVwDlXfW8DFymAiVEMJdw?si=5-G1klESS4yGfmO4E-yW0A'>spotify</LinkStyle><br/><LinkStyle href='https://podcasts.apple.com/us/podcast/talking-sopranos/id1500453500'>apple</LinkStyle></p>
                        <p><PodcastTitle>How Long Gone:</PodcastTitle><LinkStyle href='https://open.spotify.com/show/2ov19zdbTbmgmKQmmd7Go7?si=cSfM5OMqTzWGRv-rciWhmA'>spotify</LinkStyle><br/><LinkStyle href='https://podcasts.apple.com/us/podcast/how-long-gone/id1503346367'>apple</LinkStyle></p>
                    </SeparateDiv>
                </ActivityList>
                <ActivityTitle>things I've been learning:</ActivityTitle>
                <ActivityList>
                    <SeparateDiv>
                    <h3>Python</h3>
                    <h3>ReactJS</h3>
                    </SeparateDiv>
                    <SeparateDiv>
                    <h3>GatsbyJS</h3>
                    <h3>Fundamentals of UI/UX</h3>
                    </SeparateDiv>
                    <SeparateDiv>
                    <h3>Cracking the Coding Interview</h3>
                    <h3>Animations</h3>
                    </SeparateDiv>
                </ActivityList>
            </QuarantingsDiv>
        </QuarantingContainer>
    )
}

export default Quarantings;