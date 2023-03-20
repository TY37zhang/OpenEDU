import React from 'react';
import { Box } from '@mui/material';
import { mockImageApi } from '../../mockApi/apis.mjs';
// mainly for beginning pages like home/login..
export default function BackgroundImage() {
    const imageUrl = mockImageApi(390, 844);
    return (
        <Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />

        </Box>
    );
}