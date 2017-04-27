$(document).ready(function() {   
    $('#contact-submit').click(function () {
         
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var parentcell = $('input[name=parentcell');
        var subject = $('input[name=subject]');
        var playerage = $('input[name=playerage]');
 
        if (name.val()=='') {
            name.addClass('highlight');
            return false;
        } else name.removeClass('highlight');
         
        if (email.val()=='') {
            email.addClass('highlight');
            return false;
        } else email.removeClass('highlight');

        if (parentcell.val()=='') {
            parentcell.addClass('highlight');
            return false;
        } else parentcell.removeClass('highlight');
         
        if (subject.val()=='') {
            subject.addClass('highlight');
            return false;
        } else subject.removeClass('highlight');

        if (playerage.val()=='') {
            playerage.addClass('highlight');
            return false;
        } else playerage.removeClass('highlight');
        
         
        var data = 'name=' + name.val() + '&email=' + email.val() + '&parentcell=' + parentcell.val() + '&subject=' + subject.val() + '&playerage=' + playerage.val();
                 
        //start the ajax
        $.ajax({
            //this is the php file that processes the data and send mail
            url: "joinfortis.php",
             
            //GET method is used
            type: "GET",
 
            //pass the data        
            data: data,    
             
            //Do not cache the page
            cache: false,
             
            //success
            success: function (html) {             
                //if process.php returned 1/true (send mail success)
                if (html==1) {                 
                    //hide the form
                    $('#cform').fadeOut('slow');                
                     
                    //show the success message
                    $('#done').fadeIn('slow');
                     
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');              
            }      
        });
         
        //cancel the submit button default behaviours
        return false;
    });
}); 