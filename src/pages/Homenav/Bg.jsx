import React from 'react'
import HeroSlider,{Slide} from 'hero-slider'

const Lacks="./public/assets/images/pictures.jpg"
let forest="./public/assets/images/forest.jpg "

export default function Bg() {
 return (
<HeroSlider
    slidingAnimation="left_to_right"
    orientation="Horizontal"
    initailSlider={1}
    onBeforeChange={(previousSlide,nextSlide)=>console.log("onBeforeChange",previousSlide,nextSlide)}
onChange={nextSlide=>console.log("onChnage",nextSlide)}
onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
style={{
    backgroundgColor: "rgba(0,0,0,0.33)"

}}
setting={{
    slidingDuration:250,
    slidingDelay:100,
    shouldAutoplay:true,
   shouldDisplayButtons:true,
   AutoplayDuration:500,
   hight:"100vh"


}

}
>

    <Slide
        background={{
            backgroundImage:Lacks,
}}
 />
  <Slide
        background={{
            backgroundImage:forest,
            backgroundAttachment:"fixed"
}}
 />
  <Slide
        background={{
            backgroundImage:Lacks,
            backgroundAttachment:"fixed"
}}
 />
  
</HeroSlider>
  )
}
