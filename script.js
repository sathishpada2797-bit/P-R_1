// Add to Calendar (.ics download)
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
