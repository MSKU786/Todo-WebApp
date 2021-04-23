$(function() {
    $( "#my_date_picker" ).datepicker({
        defaultDate:"09/22/2020"
    });
});

// $(function(){
//     var S = $('.category').text();
//     var ar = new Array();
//     var start =0;
//     var end =0;
//     for(let i=1;i<S.length;i++)
//     {
//         if(S.charCodeAt(i)>=65 && S.charCodeAt(i)<=90)
//         {
//             var sub = S.substring(start,i);
//             start = i;
//             ar.push(sub);
//         }
//     }
//     let subs = S.substring(start)
//     ar.push(subs)
//     console.log(ar);
//     for(let i in ar)
//     {
//         switch(ar[i])
//         {
//         case "Personal": $('.category>span').css({
//                         'background-color' : 'yellow'
//                     });
//                     break;

//         case "Work" :   $('.category>span').css({
//                     'background-color' : 'red'
//                     });
//                     break;

//         case "Other" : $('.category>span').css({
//                     'background-color' : 'green'
//                     });
//                     break;

//         case "School" : $('.category>span').css({
//                     'background-color' : 'blue'
//                     });
//                     break;

//         case "Cleaning": break;

//         default: $('c')
//         }
//     }
// });