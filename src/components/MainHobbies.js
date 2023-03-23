import React from 'react'
import Hobby from './Hobby'

function MainHobbies() {

    const reading = {
        name:"Favorite Book: The Alchemist by Paulo Coelho",
        image:'https://junealholder.files.wordpress.com/2019/05/img_20190505_155026_731.jpg',
        quote:'"Everything that happens once can never happen again. But everything that happens twice will surely happen a third time." - Paulo Coelho, The Alchemist',
        text:"As an avid reader, I am constantly on the lookout for books that inspire, challenge, and transport me to new worlds. The Alchemist has had a profound impact on my life, and I highly recommend it to anyone looking for a story that will stay with them long after the last page has been turned."
    }
    const running = {
        name:"Once I started running I couldn't stop",
        image:'https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quote:'"The miracle isn\'t that I finished. The miracle is that I had the courage to start." - John Bingham',
        text:"Running is another passion of mine. As the saying goes, \"The only bad run is the one that didn't happen.\" Running allows me to push myself, both physically and mentally, and gives me a sense of accomplishment and clarity. Whether I\'m training for a race or simply going for a jog, I always feel rejuvenated after a good run."
    }
    const movie = {
        name:"Favorite Movie: The Shawshank Redemption",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEVEEwyYlEKJbnneJYQ2moCBaammhvILoI7_ayPgU2TN9pLPV",
        quote:'"Movies can and do have tremendous influence in shaping young lives in the realm of entertainment towards the ideals and objectives of normal adulthood." - Walt Disney',
        text:"When I'm not reading or running, I love to watch movies. One of my all-time favorites is The Shawshank Redemption, a powerful story about hope, friendship, and redemption. This movie never fails to move me, and I find myself drawn in every time I watch it."
    }
    const coding = {
        name:"Coding: Turning ideas into reality",
        image:"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg",
        quote:'"Everyone should learn how to program a computer because it teaches you how to think." - Steve Jobs',
        text:"Coding is not just a hobby for me; it's a way of thinking and approaching problems. It has taught me to be more logical, analytical, and detail-oriented, skills that have helped me in all areas of my life. Whether I'm writing a script, building a website, or developing an app, I'm always looking for ways to improve my skills and challenge myself to do better."
    }

  return (
    <div className='main-hobbies-container'>
        <Hobby value="Running" name= {running.name} img={running.image} quote = {running.quote} text = {running.text}/>
        <Hobby value="Reading" name= {reading.name} img={reading.image} quote = {reading.quote} text = {reading.text}/>
        <Hobby value="Movies" name= {movie.name} img={movie.image} quote = {movie.quote} text = {movie.text}/>
        <Hobby value="Coding" name= {coding.name} img={coding.image} quote = {coding.quote} text = {coding.text}/>
    </div>
  )
}

export default MainHobbies