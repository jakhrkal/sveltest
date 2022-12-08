import type { LayoutServerLoad } from './$types';

export const prerender = true; //??

export const load: LayoutServerLoad = async () => {
    const backgroundRotationSpeedSeconds = 3600;

    const currentDate = new Date();
    const oneMinuteAngle = 21600 / backgroundRotationSpeedSeconds;
    const backgroundStartRotationAngle = (currentDate.getHours()*60 + currentDate.getMinutes()) * oneMinuteAngle;
    
    return {
        backgroundRotationSpeed: backgroundRotationSpeedSeconds,
        backgroundStartRotation: backgroundStartRotationAngle,
        backgroundEndRotation: backgroundStartRotationAngle + 360
    };
};