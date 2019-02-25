

function done(){
    console.log(window.screen.width)
    if( window.screen.width<=550){
        console.log($('.wrapper'))
        $('.wrapper').on('click',function(e){
            console.log($(this))
            $(this).find('.detail').show().end()
            $(this).siblings().children('.detail').hide().end()
            $(this).parent().siblings().children('.wrapper').children('.detail').hide().end()
            e.stopPropagation()
        })
        $('body').on('click',()=>{
            $('.detail').hide()
        })
    }
}

export default done