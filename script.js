// ADD this variable with your other var declarations at the top:
var mapSection=document.getElementById("mapSection");

// ADD this line inside the setTimeout (where other sections get "visible"):
mapSection.classList.add("visible");

// ADD ",.map-wrapper" to your revealElements querySelectorAll:
// Change FROM:
// var revealElements=document.querySelectorAll(".family-card,.quote-text,.save-date-card,.event-item,.gallery-item");
// Change TO:
var revealElements=document.querySelectorAll(".family-card,.quote-text,.save-date-card,.event-item,.gallery-item,.map-wrapper");

// ADD this entire block BEFORE the closing });
document.getElementById("addCalendarBtn").onclick=function(){
var icsContent=[
"BEGIN:VCALENDAR",
"VERSION:2.0",
"PRODID:-//Wedding//EN",
"BEGIN:VEVENT",
"DTSTART:20260607T020500Z",
"DTEND:20260607T043500Z",
"SUMMARY:Muhurtham - Padalingam & Rajarajeshwari Wedding",
"LOCATION:SOP Marriage Hall\\, Sivakasi\\, Tamil Nadu",
"DESCRIPTION:You are invited to witness the Muhurtham of Padalingam & Rajarajeshwari at SOP Marriage Hall\\, Sivakasi.",
"END:VEVENT",
"END:VCALENDAR"
].join("\r
");
var blob=new Blob([icsContent],{type:"text/calendar;charset=utf-8"});
var link=document.createElement("a");
link.href=URL.createObjectURL(blob);
link.download="wedding-muhurtham.ics";
link.click();
URL.revokeObjectURL(link.href);
};
