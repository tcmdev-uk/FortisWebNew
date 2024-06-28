

const slider = () => { 
    const buttons = $("button[type='button']");
    const sliderWrapper = $("#default-carousel")

    buttons.click(function() { 
    sliderWrapper.attr("data-carousel", "slide");
    })
}
slider()