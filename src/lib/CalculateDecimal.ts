export function CalculateDecimal(hours: string): number {
    const splittedHours: string[] = SplitHours(hours)
    const minutes: number = parseFloat(splittedHours[1]) / 60
    const hour: number = parseFloat(splittedHours[0])
    const roundedHours = RoundHours(hour + minutes)
    return roundedHours 
}


function SplitHours(hours: string): string[] {
    const splitted = hours.split(":")

    return splitted
}

function RoundHours(decimal: number): number {        
    return parseFloat(decimal.toFixed(2))
}