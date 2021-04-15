var calendar2021 = {
    jan: {1: "Сайхан амарна"}, 
    feb: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
    mar: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
    apr: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
    may: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
    jun: {6: "Жавхлан багшийн төрсөн өдөр"},  
    jul: {4: "Хичээл амарсаан ураа"}, 
    aug: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
    sep: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
    oct: {13: "Сур сур бас дахин сур"}, 
    nov: {2: "Сурсаар л бай"}, 
    dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} 
    }
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
        var myStringfy= JSON.stringify(calendar2021);
        var obj= JSON.parse(myStringfy);

        document.getElementById('list').innerHTML='<input type="text" placeholder="Search events" id="search-events"><button type="button" class="searchButton" onclick="searchEvents()">Search</button>';
        function searchEvents(){
            listCreator='';
            listCreator+='<ul class="eventList">';
            var eventMonth = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
            const term= document.getElementById('search-events').value.toLowerCase();
            console.log(term);
                var event;
                var count=0;
                for(var i=0; i<12; i++) {
                    for(var j=1; j<=31; j++) {                       
                        event=obj[eventMonth[i]][j];
                        if(event!=null &&(event.toLowerCase().indexOf(term)!= -1)) {
                            listCreator+='<li>'+ monthName[i]+': '+j+' ';
                            listCreator+=event;
                            listCreator+='</li>';
                            count++;
                        }
                        else
                            console.log(term);
                    }
                }
                if(count==0) {
                    listCreator+='<li> Тийм хайлт олдсонгүй.</li>';
                }
                document.getElementById('display').innerHTML=listCreator;
        }
               
        var dayCounter = 4;
        var htmlDisplay='';
        var htmlCreator = '';
        for(var months=1; months<=12; months++) {
            calendarPrint(months);
            function calendarPrint(month) {         
                var eventMonth = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
                var prevMonth = new Date(2021, month-1, 0);
                var current = new Date(2021, month, 0);
                var nextMonth = new Date(2021, month+1, 0);
                    htmlCreator+='<div class="calendar"><div id="buttons">';
                    htmlCreator+='<button type="button" class="prevButton" onclick="calendar2nd('+(month-1)+')"> &#8249; prev </button>'; 
                    htmlCreator+='<h2 onclick="calendar2nd('+month+')">';
                    htmlCreator+=monthName[month-1];
                    htmlCreator+='</h2>';                               
                    htmlCreator+='<button type="button" class="nextButton" onclick="calendar2nd('+(month+1)+')">next &#8250; </button>';
                    htmlCreator+='<button type="button" class="returnButton" onclick="returnButtonF('+month+')"> X </button></div>';      
                                    
                htmlCreator+= '<table class="main">';
                htmlCreator+= '<tr class="weekdays"><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td id="weekend">Sat</td><td id="weekend">Sun</td></tr><tr>';
                
                if(dayCounter!=7) {
                for(var i=(prevMonth.getDate()-dayCounter+1);i<=prevMonth.getDate();i++) {
                    htmlCreator += '<td class="blur days">';
                    htmlCreator += i;
                    htmlCreator += '</td>'; 
                }
                }
                for(var i=1; i<=current.getDate(); i++){
                    if(dayCounter%7==0) {
                        htmlCreator+='</tr><tr>';
                            dayCounter=0;
                    }
                    dayCounter++;
                    if(calendar2021[eventMonth[month-1]][i]) {
                        htmlCreator +='<td class="event days" onclick="ifEvent('+month +','+i+')">'+i+'</td>';
                    } else {
                        htmlCreator += '<td class="days" onclick="ifEvent('+month +','+i+')">'+i+'</td>';
                    }
                }
                
                for(var i=1; i<=(7-dayCounter); i++) {
                    htmlCreator += '<td class="blur days">';
                    htmlCreator += i;
                    htmlCreator += '</td>';                   
                } 
                

                htmlCreator += '</tr></table></div>' 

                   
            }
            
            function calendar2nd(currentMonth) {
                console.log(currentMonth-1);

                var buttons=document.querySelectorAll('.returnButton'); //buh X tovchluurig classar n zarlan avah
                for(var i=0; i<buttons.length; i++) {                   
                    buttons[i].style.display= "none";
                    }
                 var prevButtons=document.querySelectorAll('.prevButton'); //buh < tovchluurig classar n zarlan avah
                for(var i=0; i<prevButtons.length; i++) {                   
                    prevButtons[i].style.display= "none";
                    }
                var nextButtons=document.querySelectorAll('.nextButton'); //buh > tovchluurig classar n zarlan avah
                for(var i=0; i<nextButtons.length; i++) {                   
                        nextButtons[i].style.display= "none";
                    }
                var month=document.querySelectorAll('.calendar');

                month[currentMonth-1].style.display="";                 
                month[currentMonth-1].setAttribute("id", "newCalendar"); //shine id uguh
                    for(var i=0; i<month.length; i++) {
                        if((currentMonth-1)!=i) {
                        month[i].style.display= "none";
                        }
                    }

                    var returnButtons= document.querySelectorAll('.returnButton');
                    returnButtons[currentMonth-1].style.display="";             //X buttong gargaj ireh
                    if(currentMonth>1) {
                    var prevButtons= document.querySelectorAll('.prevButton');
                    prevButtons[currentMonth-1].style.display="";               //prev buttong gargaj ireh 
                    }
                    if(currentMonth<12) {
                    var nextButtons= document.querySelectorAll('.nextButton');
                    nextButtons[currentMonth-1].style.display="";               //next buttong gargaj ireh
                    }
                

            }
            function returnButtonF(visibleMonth) { //X button deer darahad busad saruud garj iren tovchluuruud alga bolno.
                console.log(visibleMonth);
                var month=document.querySelectorAll('.calendar');
                for(var i=0; i<month.length; i++) {
                    month[i].style.display="";
                    month[i].removeAttribute("id", "newCalendar");
                }
                var button=document.querySelectorAll('.returnButton');                
                button[visibleMonth-1].style.display="none";

                var prevButtons= document.querySelectorAll('.prevButton');
                    prevButtons[visibleMonth-1].style.display="none";

                var nextButtons= document.querySelectorAll('.nextButton');
                    nextButtons[visibleMonth-1].style.display="none";

                
            }
            function ifEvent(sar, day) {
                var monthName = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
                var eventMonth = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
                htmlDisplay+=' '+day +'. ';
                var eventWord=calendar2021[eventMonth[sar-1]][day];
                if(eventWord==null) 
                htmlDisplay='<label>'+monthName[sar-1]+' '+day +'. '+'Ямар нэгэн event-гүй өдөр.'+'</label>';
                else
                htmlDisplay='<label style="color: goldenrod">'+monthName[sar-1]+' '+day +'. '+eventWord+'</label>';
                document.getElementById('display').innerHTML= htmlDisplay;
            }
        }
        
        document.querySelector('.main').innerHTML = htmlCreator;

        var buttons=document.querySelectorAll('.returnButton'); //buh X tovchluurig classar n zarlan avah
                for(var i=0; i<buttons.length; i++) {                   
                    buttons[i].style.display= "none";
                }
        var prevButtons=document.querySelectorAll('.prevButton'); //buh < tovchluurig classar n zarlan avah
                for(var i=0; i<prevButtons.length; i++) {                   
                    prevButtons[i].style.display= "none";
                }
        var nextButtons=document.querySelectorAll('.nextButton'); //buh > tovchluurig classar n zarlan avah
                for(var i=0; i<nextButtons.length; i++) {                   
                    nextButtons[i].style.display= "none";
                }