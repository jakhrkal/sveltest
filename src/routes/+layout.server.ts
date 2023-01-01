import type { LayoutServerLoad } from './$types';

export const prerender = true; //??

export const load: LayoutServerLoad = async () => {
    // How many seconds it takes to rotate 360deg.
    const backgroundRotationSpeedSeconds = 3600;
    const currentDate = new Date();
    const day = currentDate.getHours() > 6 && currentDate.getHours() < 18;
    const oneMinuteAngle = 21600 / backgroundRotationSpeedSeconds;
    
    return {
        backgroundImg: day ? 'default-day-background.svg' : 'default-night-background.svg',
        backgroundRotationSpeed: backgroundRotationSpeedSeconds,
        backgroundStartRotation: (currentDate.getHours()*60 + currentDate.getMinutes()) * oneMinuteAngle
    };
};