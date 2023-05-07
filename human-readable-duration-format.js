function formatDuration(seconds) {
  // Check if duration is zero
  if (seconds === 0) {
    return "now";
  }

  // Define conversion constants
  var MINUTE = 60;
  var HOUR = 60 * MINUTE;
  var DAY = 24 * HOUR;
  var YEAR = 365 * DAY;

  // Calculate the duration
  var years = Math.floor(seconds / YEAR);
  seconds %= YEAR;
  var days = Math.floor(seconds / DAY);
  seconds %= DAY;
  var hours = Math.floor(seconds / HOUR);
  seconds %= HOUR;
  var minutes = Math.floor(seconds / MINUTE);
  seconds %= MINUTE;

  // Build the human-friendly representation
  var duration = [];
  if (years > 0) {
    duration.push(years + (years === 1 ? " year" : " years"));
  }
  if (days > 0) {
    duration.push(days + (days === 1 ? " day" : " days"));
  }
  if (hours > 0) {
    duration.push(hours + (hours === 1 ? " hour" : " hours"));
  }
  if (minutes > 0) {
    duration.push(minutes + (minutes === 1 ? " minute" : " minutes"));
  }
  if (seconds > 0) {
    duration.push(seconds + (seconds === 1 ? " second" : " seconds"));
  }

  // Join the duration parts with appropriate separators
  var result = duration.join(", ");
  var lastIndex = result.lastIndexOf(", ");
  if (lastIndex !== -1) {
    result = result.substring(0, lastIndex) + " and" + result.substring(lastIndex + 1);
  }

  return result;
}

// Example usage
console.log(formatDuration(62)); // Output: "1 minute and 2 seconds"
console.log(formatDuration(3662)); // Output: "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(0)); // Output: "now"
