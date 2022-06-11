import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Props = {}

function SocialIcons({}: Props) {
    return (
        <div>
            <GitHubIcon/>
            <MarkEmailReadIcon/>
            <LinkedInIcon/>
        </div>
    );
}

export default SocialIcons;