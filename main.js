let tsInfo = ["Open source, compiled language", "Built on JavaScript", "Created and developed by Microsoft", "Offers gradual adoption"];
$(function () {
    let $leftBtn = $(".display-container #left");
    let $rightBtn = $(".display-container #right");
    let $displayContent = $(".display-container #content");
    console.log(tsInfo[0]);
    let index = 0;
    $displayContent.text(tsInfo[index]);
    $leftBtn.click(function () {
        --index;
        if (index < 0)
            index = tsInfo.length - 1;
        $displayContent.text(tsInfo[index]);
    });

    $rightBtn.click(function () {
        ++index;
        if (index > tsInfo.length - 1)
            index = 0;
        $displayContent.text(tsInfo[index]);
    });
})