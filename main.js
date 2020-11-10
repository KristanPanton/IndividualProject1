let tsInfo = ["Open source, compiled language", "Built on JavaScript", "Created and developed by Microsoft", "Offers gradual adoption"];

$(function () {
    // Updates the inner html of span.content with text from tsInfo on click
    let $displayLeftBtn = $(".display-container span.left");
    let $displayRightBtn = $(".display-container span.right");

    // The span that gets updated
    let $displayContent = $(".display-container span.content");

    let displayIndex = 0;
    $displayContent.text(tsInfo[displayIndex]);
    $displayLeftBtn.click(function () {
        // Updates and wraps the current index if the current index is negative
        --displayIndex;
        if (displayIndex < 0)
            displayIndex = tsInfo.length - 1;
        // displayIndex = --displayIndex % tsInfo.length;
        $displayContent.text(tsInfo[displayIndex]);
    });

    $displayRightBtn.click(function () {
        displayIndex = ++displayIndex % tsInfo.length;
        $displayContent.text(tsInfo[displayIndex]);
    });

    // Changes the visible image on click
    // Wanted to change the src attribute, but it was too slow
    let $detailLeftBtn = $(".detail-container span.left");
    let $detailRightBtn = $(".detail-container span.right");
    let $detailImg = $(".detail-container img.responsive");
    let detailIndex = 0;

    $detailLeftBtn.click(function () {
        // Removes visiblity from previous image
        $detailImg.eq(detailIndex).removeClass("visible"); // .visible { display: initial }
        --detailIndex;
        if (detailIndex < 0)
            detailIndex = tsInfo.length - 1;
        // detailIndex = --detailIndex % $detailImg.length;
        // Adds visibility to current immage
        $detailImg.eq(detailIndex).addClass("visible");
    });

    $detailRightBtn.click(function () {
        $detailImg.eq(detailIndex).removeClass("visible");
        detailIndex = ++detailIndex % $detailImg.length;
        $detailImg.eq(detailIndex).addClass("visible");
    });
})