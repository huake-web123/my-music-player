export function formatTimeFromSeconds (seconds) {
  seconds = Math.round(seconds)
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - hours * 3600) / 60)
  let second = seconds - hours * 3600 - minutes * 60
  let arr = []
  if (hours > 0) {
    hours = (hours + '').padStart(2, '0')
    arr.push(hours)
  }
  if (minutes > 0) {
    minutes = (minutes + '').padStart(2, '0')
    arr.push(minutes)
  } else {
    arr.push('00')
  }
  second = (second + '').padStart(2, '0')
  arr.push(second)
  return arr.join(':')
}
