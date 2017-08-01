// ref: http://diveintohtml5.org/detect.html
function supports_input_placeholder() {
    var i = document.createElement('input');
    return 'placeholder' in i;
}

if(!supports_input_placeholder()) {
    var fields = document.getElementsByTagName('INPUT');
    for(var i=0; i < fields.length; i++) {
        if(fields[i].hasAttribute('placeholder')) {
            fields[i].defaultValue = fields[i].getAttribute('placeholder');
            fields[i].onfocus = function() { if(this.value == this.defaultValue) this.value = ''; }
            fields[i].onblur = function() { if(this.value == '') this.value = this.defaultValue; }
        }
    }
}

//form validate

function validImput(element){
    var input = element.find("[required]").first()
    var validity = false
    if(input.is("[type='checkbox']")){
        var checked = $(element).find("[type='checkbox']:checked")[0]
        if(checked){
            validity = true
        }
    }
    else if(input[0]==undefined){
        validity = true
    }
    else if(input[0].checkValidity()){
        validity = true
    }
    return validity
}

function Formvalidate(event){
    var lastInvalidEle
    //Make user forms submit on Safari
    $("form#application-form form-contact").each(function(key, ele) {
        var ref = $(ele).find("[required]").closest(".form-group");
        var validForm = true
        var lastInvalidEle
        $(ref).each(function(key, group){
            var group = $(group)
            var inputValid = validImput(group)
            validForm = validForm && inputValid
            var container = group.find(".input-container") 
            container.toggleClass("error", !inputValid)
            if(!inputValid){ lastInvalidEle = group}
        });

        if(!validForm){
            scrollTop($(lastInvalidEle).offset().top())
            event.preventDefault();
            return false
        }
        return true;
    });
}

function addOtherTextInput(event){
    var input = $(this).siblings()
    input.css({display: "none"})
    if ($(this).val()=="Other"){
        input.val("")
        input.css({display: "inline-block"}).focus()
    }
    else {
        input.val($(this).val())
    }

}


    $(window).ready(function(){
        //focus on inputs when clikc on form-group
        $(document).on("click.input", ".form-group", function(){
            if (!$(event.srcElement).is("input, select")){
                $(this).find("input:visible, select:visible").last().focus()
            }

        })
        //on Ajax success activate modal
        $(document).on( "ajax:success", "form[data-remote]", function(e, data, status, xhr){
            if ($(this).data("modal")){
                $($(this).data("modal")).modal("toggle")
            }
        })
    })


//  set up events
$(document).ready(function(){
    $(document).on("focus.input", "input:not([type='submit'],[type='radio'],[type='checkbox']), select, textarea", function(){
        var group = $(this).closest(".form-group")
        group.find(".input-container").removeClass("error")
    })
    $(document).on("focusout.input", "input:not([type='submit'],[type='radio'],[type='checkbox']), select, textarea", function(){
        var group = $(this).closest(".form-group")
        group.find(".input-container").toggleClass("error", !validImput(group))
    })

    $(document).on("click.input", "input[type='radio'], input[type='checkbox']", function(){
        var group = $(this).closest(".form-group")
        group.find(".input-container").toggleClass("error", !validImput(group))
    })

    $(document).on("click.submit-safari", "form > input[type='submit']", Formvalidate)

    $(document).on("change.select-other", "select#applicant_found_elium_how", addOtherTextInput)
})