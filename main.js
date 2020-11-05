let tsInfo = ["Open source, compiled language", "Built on JavaScript", "Created and developed by Microsoft", "Offers gradual adoption"];

$(function () {
    let $displayLeftBtn = $(".display-container span.left");
    let $displayRightBtn = $(".display-container span.right");
    let $displayContent = $(".display-container span.content");

    let displayIndex = 0;
    $displayContent.text(tsInfo[displayIndex]);
    $displayLeftBtn.click(function () {
        displayIndex = --displayIndex % tsInfo.length;
        $displayContent.text(tsInfo[displayIndex]);
    });

    $displayRightBtn.click(function () {
        displayIndex = ++displayIndex % tsInfo.length;
        $displayContent.text(tsInfo[displayIndex]);
    });

    let $detailLeftBtn = $(".detail-container span.left");
    let $detailRightBtn = $(".detail-container span.right");
    let $detailImg = $(".detail-container img.responsive");
    let detailIndex = 0;

    $detailLeftBtn.click(function () {
        $detailImg.eq(detailIndex).removeClass("visible");
        detailIndex = --detailIndex % $detailImg.length;
        $detailImg.eq(detailIndex).addClass("visible");
    });

    $detailRightBtn.click(function () {
        $detailImg.eq(detailIndex).removeClass("visible");
        detailIndex = ++detailIndex % $detailImg.length;
        $detailImg.eq(detailIndex).addClass("visible");
    });
})