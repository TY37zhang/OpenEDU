import { colors, createTheme } from '@mui/material';
import { Outlet } from "react-router-dom";
import React from 'react';

const callbackMap = new Map();

export function addCallback(name, func) {

    if (callbackMap.has(name)) {
        callbackMap.get(name)?.add(func);
    }
    else {
        const newSet = new Set();
        newSet.add(func);
        callbackMap.set(name, newSet);
    }
}

export function removeCallback(name, func) {

    if (callbackMap.has(name)) {
        (callbackMap.get(name) ?? new Set()).remove(func);

        if (callbackMap.get(name).size() === 0) {
            callbackMap.delete(name);
        }
    }
}

export async function invokeCallback(name, ...args) {

    if (!callbackMap.has(name)) {
        return;
    }

    for (const func of (callbackMap.get(name) ?? new Set())) {
        (async () => func(...args))();
    }
}

const LIGHT_SCHEME = {
    primary: {

    },
    secondary: {

    },
    teriary: {

    },
    error: {

    },
    background: {

    },
    surface_variant: {

    },
};

const DARK_SCHEME = {
    primary: {

    },
    secondary: {

    },
    teriary: {

    },
    error: {

    },
    background: {

    },
    surface_variant: {

    },
};

export function getTheme() {
    // Reminder: in newer versions of MUI, the color does not seem to be calculated
    return createTheme(
        {
            palette: {
                primary: {
                    main: '#30418b',
                    contrastText: "#fff"
                },
                secondary: {
                    main: '#4A58A9',
                    dark: '#BBC3FF'
                },
                teriary: {
                    main: ''
                },
                error: {
                    main: '#BA1A1A',
                    dark: 'FFB4AB'
                },
                success: {
                    main: 'rgb(88,229,82)',
                    dark: 'rgb(136,204,134)'
                },
                warning: {
                    main: '#974812',
                    dark: '#FFB68F'
                },
                neutral: {
                    main: '#303034',
                },
                background: {
                    default: '#1b1b1f',
                    paper: '#45464e'
                },
                text: {
                    primary: '#fff',
                    secondary: '#b5b5b9'
                },
            },
            components: {
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            borderRadius: "8px",
                            backgroundColor: '',
                            '& .MuiFilledInput-root': {
                                borderRadius: '8px', // Set your desired border radius value here
                                backgroundColor: '#fff',
                                opacity: '0.8',
                            },
                        },
                    }
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: "12px", // specify your desired border radius value here

                        },
                    },
                },
            },
            typography: {
                fontFamily: [
                    'Raleway',
                    '-apple-system',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                ].join(','),
                button: {
                    textTransform: 'none'
                }
            }
        }
    );
}

export function asChildPage(component) {

    return <div>
        {component}
        <Outlet />
    </div>;
}