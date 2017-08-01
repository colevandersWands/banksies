
function arrayUnique(array){
    var uniqueElements = [];
        $.each(array, function(i, el){
        if($.inArray(el, uniqueElements) === -1) uniqueElements.push(el);
    });
    return uniqueElements
}

function equalizeHeight(i, selector){
    var heights = []
    var elements = $(selector)
    elements.each(
        function(key,ele){
            heights.push(ele.scrollHeight)
        }
    )

    var maxHeight = Math.max.apply(Math, heights)
    elements.each(
        function(key,ele){
            $(ele).height(maxHeight)
        }
    )
}

function findEqualizableElements() {
        var elements = $("[equalizeHeight]");
        var ids = [];
        elements.each(function(i, el){
            ids.push("[equalizeHeight='"+$(el).attr("equalizeHeight")+"']")
        });
        $.each(ids, equalizeHeight)

}

$(window).ready(findEqualizableElements)
$(window).resize(findEqualizableElements)
$(document).on('pjax:success', findEqualizableElements);