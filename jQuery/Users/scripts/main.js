
$(document).ready(function () {
    $("form").submit(function(){
        var value = $(this).val();
        $("input").each(function(){
            $("td").append(value);
        });
    });
});