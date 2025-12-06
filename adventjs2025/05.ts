type ElfDateTime =
    `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(
    fromTime: ElfDateTime,
    takeOffTime: ElfDateTime,
): number {
    const fromTimeArray = fromTime.split('@')[0].split('*');
    const fromTimeHHMMSS = fromTime.split('@')[1].replace(' NP', '').split('|');
    const fromTimeData = new Date(
        Date.UTC(
            Number(fromTimeArray[0]),
            Number(fromTimeArray[1]),
            Number(fromTimeArray[2]),
        ),
    );
    fromTimeData.setHours(
        Number(fromTimeHHMMSS[0]),
        Number(fromTimeHHMMSS[1]),
        Number(fromTimeHHMMSS[2]),
    );
    const fechaenSeg = Math.floor(fromTimeData.getTime() / 1000);

    const takeOffTimeArray = takeOffTime.split('@')[0].split('*');
    const takeOffTimeHHMMSS = takeOffTime
        .split('@')[1]
        .replace(' NP', '')
        .split('|');
    const takeOffTimeDate = new Date(
        Date.UTC(
            Number(takeOffTimeArray[0]),
            Number(takeOffTimeArray[1]),
            Number(takeOffTimeArray[2]),
        ),
    );
    takeOffTimeDate.setHours(
        Number(takeOffTimeHHMMSS[0]),
        Number(takeOffTimeHHMMSS[1]),
        Number(takeOffTimeHHMMSS[2]),
    );
    const fechadespegueenSeg = Math.floor(takeOffTimeDate.getTime() / 1000);
    console.log(fechadespegueenSeg - fechaenSeg);
    return fechadespegueenSeg - fechaenSeg;
}

const takeoff = '2025*12*25@00|00|00 NP';

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff);
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff);
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff);
// -12
