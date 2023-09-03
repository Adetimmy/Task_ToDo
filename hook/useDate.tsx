

export const useDate = ({year, month}:any) => {

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const week = []
const date = new Date()
const daysInMonth = new Date(year, month + 1, 0).getDate();
const yea = date.getFullYear();
const mnth = date.getMonth();


for (let i = 1; i <= daysInMonth; i++) {

  const date = new Date(`2023-09-${i}`);
  const dayOfWeekString = daysOfWeek[date.getDay()];
  week.push({dayOfWeekString, i})

}

return {months, mnth, yea, week, }
}
