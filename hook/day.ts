import { useDate } from "./useDate"

export const greet = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const {months, mnth, yea, week} = useDate({year, month})
    let message

    const timeOfDay = new Date().getHours()
    
    if (timeOfDay < 12) message = "Morning" 
    
    else if(timeOfDay < 16) message = "Afternoon"
    
    else{
        message = "Evening"
    }

    return {message, months, mnth, yea, week}
}