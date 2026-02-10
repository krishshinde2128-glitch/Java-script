console.log("This is the Uber module.");
document.getElementById("pickup-button").addEventListener("click", function() {
    alert("Your ride is on the way!");
    prompt("Please enter your pickup location:");
})
  const cardData = [
    {
        title: "Ride",
        description:"Go anywhere with Uber. Request a ride, hop in, and go.",
        btnDetails:"Details",
        imgSrc:"https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png"
    },
    {
        title: "Reserve",
        description:"Reserve your ride in advance so you can relax on the day of your trip.",
        btnDetails:"Details",
        imgSrc:"https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
    },
     {
        title: "Intercity",
        description:"Get convenient, affordable outstation cabs anytime at your door.",
        btnDetails:"Details",
        imgSrc:"https://mobile-content.uber.com/launch-experience/intercity.png"
    },
     {
        title: "Courier",
        description:"Uber makes same-day item delivery easier than ever.",
        btnDetails:"Details",
        imgSrc:"https://cn-geo1.uber.com/static/mobile-content/Courier.png"
    }
]