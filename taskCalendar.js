let day = prompt("Enter a day of the week (e.g., 'Monday', 'Tuesday'):");

switch (day.toLowerCase()) {
  case "monday":
    console.log("Do jogging.");
    break;
  case "tuesday":
    console.log("Do push up.");
    break;
  case "wednesday":
    console.log("Do workout.");
    break;
  case "thursday":
    console.log("Do workout.");
    break;
  case "friday":
    console.log("Do gym.");
    break;
  case "saturday":
    console.log("Do the Laundy.");
    break;
  case "sunday":
    console.log("Relax and recharge for the week ahead.");
    break;
  default:
    console.log("That's not a valid day. Please enter a day of the week.");
}
