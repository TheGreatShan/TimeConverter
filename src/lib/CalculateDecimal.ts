export function CalculateDecimal(hours : string) : number{
    const splittedHours: string[] = SplitHours(hours)
    const minutes : number = parseFloat(splittedHours[1]) / 60
    const hour : number = parseFloat(splittedHours[0])

    return hour + minutes
}


function SplitHours(hours : string) : string[] {
    const splitted = hours.split(":")
    
    return splitted
}