var http = require('http');

// Create server
http.createServer(function (req, res) {

    // HTTP Status: 200 : OK
    // Content Type: text/html
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body as "Hello World!"  
    res.end(`
    <!-------Html-------->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <title>Portfolio website</title>
</head>

<body>

    <!---main section-->
    <section class="sec1" id="home">
    <i class="fa fa-arrow-up" aria-hidden="true" onclick = "scrollToTop();"></i>  
        <div class="bg">
            <div class="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#work">works</a></li>
                    <li><a href="#testimonials">testimonials</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
        </div>
        <div class="nav">
            <h2>Portfolio</h2>
            <div class="navBar">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#testimonials">My Blogs</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="menu">
            </div>
        </div>
        <div class="context">
            <h2>Hello, I'm</h2>
            <h1>Dev Kumar</h1>
            <h4>I'm a Computer Scientist  and Programmer </h4>
            <a href="https://github.com/DevKumar57-67">
              My Github
            </a>


        </div>
    </section>
    <!---!main section-->


    <!--about us section-->
    <section class="sec2" id="about">
        <h2 class="head">about Me</h2>
        <div class="container">
            <div class="content one" data-aos="fade-right" data-aos-offset="250" data-aos-duration="1000">
                <h2>I'm a Computer Scientist and Programmer</h2>
                <p>I am specialised
                  in Data Science and Artficial Intelligence I am having lot of experience in the field of web development both frontend and backend and a bit of app development in react native
             </p>
                <p>My Experiences mainly are in the field of Data Science,
         Software Systems and web development where I had created lot of projects
         </p>

         <div class="image1 one" data-aos="fade-left" data-aos-offproject set="250" data-aos2-durationd="1000">
<img src="https://images.unsplash.com/pIx hoto-z1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80">
            </div>
        </div>
    </section>
    <!--!about us section-->
    <!---our services section----->
    <section class="sec3" id="services">
        <h2 class="head">My services</h2>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci.</p>
        <div class="container">
            <div class="box" data-aos="flip-left" data-aos-offset="250" data-aos-duration="1000">
                <div class="content">
                    <img src="https://img.icons8.com/wired/64/000000/web-laptop.png"/>
                    <h2>Web Design</h2>
                    <p>
My Web Designing experience is quite a bit more than just a few years ago. I have been designing professional websites for clients for a few years now. I have worked with different clients and have designed websites for them.You can visit my latest websites on my Github profile


                    
                    </p>
                </div>
            </div>


            <div class="box" data-aos="flip-right" data-aos-offset="250" data-aos-duration="1000">
                <div class="content">
                    <img src="https://img.icons8.com/ios-filled/50/000000/web.png"/>
                    <h2>Web Develpoment</h2>
                    <p>Web development has always been one of the most fascinating field for me.I have been developing both frontend and backend for different types of websites.I have created web servers in Node js for my clients and became experienced in backend development in Nodejs</p>
                </div>
            </div>
            <div class="box" data-aos="flip-up" data-aos-offset="250" data-aos-duration="1000">
                <div class="content">
                    <img src="https://img.icons8.com/wired/64/000000/android.png"/>
                    <h2>React Native App development</h2>
                    <p>
                    Building apps in recat native is a very interesting field for me.I have been developing apps for android and ios using react native.
                    </p>
                </div>
            </div>
            <div class="box" data-aos="flip-down" data-aos-offset="250" data-aos-duration="1000">
                <div class="content">
                    <img src="https://img.icons8.com/wired/64/000000/portrait-mode-female.png"/>
                    <h2>Software Development</h2>
                    <p>
                  I have completed lot of courses in the field of software development. I am a Python developer in general making software solutions in python is my forte but I can prefer C and C++ as well as they are good system software development languages
                    </p>
                </div>
            </div>
            <div class="box" data-aos="fade-right" data-aos-offset="250" data-aos-duration="1000">
                <div class="content" >
                   <img src="https://img.icons8.com/ios-filled/50/000000/content.png"/>
                    <h2>Data Science</h2>
                    <p> My most experienced and skilled fielfd of computer science is Data Science and AI as I am a skilled data scientist and engineer. I had programmed a lot of Machine Learning algorithms,Deep Learning models and NLP models.I had programmed some generative AI projects such as chatbots and language translation software as well</p>
                </div>
            </div>
            <div class="box" data-aos="fade-left" data-aos-offset="250" data-aos-duration="1000">
                <div class="content">
                    <img src="https://img.icons8.com/wired/64/000000/video.png"/>
                    <h2>Video Game Development</h2>
                    <p> My last skill is Video game development as I like games very much so I prohrammed a lot of games in javascript and pyhton both</p>
                </div>
            </div>
        </div>
    </section>
    <!---!our services section----->

    <!----our latest work section------->
        <section class="sec4" id="work">
            <h2 class="head">
                My latest Work
            </h2>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eligendi.</p>
            <div class="container">
                <div class="box" data-aos="fade-right" data-aos-offset="250" data-aos-duration="1000">
                    <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                </div>
                <div class="box" data-aos="fade-left" data-aos-offset="250" data-aos-duration="1000">
                    <img src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                </div>
                <div class="box" data-aos="zoom-in-down" data-aos-offset="250" data-aos-duration="1000">
                    <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                </div>
                <div class="box"  data-aos="zoom-in-left" data-aos-offset="250" data-aos-duration="1000">
                    <img src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80">
                </div>
            </div>
        </section>
        <!----!our latest work section------->

        <!----our testimonial section------->
        <section class="sec5" id="testimonials">
            <h2 class="head">Testimonial</h2>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptates.</p>
            <div class="container">
                <div class="box" data-aos="flip-left" data-aos-offset="250" data-aos-duration="1000">
                    <div class="upper">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptates iure dolorem soluta
                        nesciunt provident, in ea dignissimos suscipit rerum excepturi exercitationem officiis, vitae quia
                        aspernatur corporis itaque eius nemo. Maiores, reiciendis illo odit saepe similique minima illum
                        vero explicabo.
                    </div>
                    <div class="lower">
                        <h2>Someone Famous</h2>
                        <h4>Creative Designer</h4>
                    </div>
                </div>
                <div class="box" data-aos="flip-right" data-aos-offset="250" data-aos-duration="1000">
                    <div class="upper">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptates iure dolorem soluta
                        nesciunt provident, in ea dignissimos suscipit rerum excepturi exercitationem officiis, vitae quia
                        aspernatur corporis itaque eius nemo. Maiores, reiciendis illo odit saepe similique minima illum
                        vero explicabo.
                    </div>
                    <div class="lower">
                        <h2>Someone Famous</h2>
                        <h4>Creative Designer</h4>
                    </div>
                </div>
            </div>
        </section>
        <!----!our testimonial section------->

        <!------contact us section--------->
        <section class="sec6" data-aos="fade-right" data-aos-offset="250" data-aos-duration="1000" id="contact">
            <h2 class="head">Contact Me</h2>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consectetur.</p>
            <div class="container">
                <div class="box1 box" data-aos="flip-left" data-aos-offset="250" data-aos-duration="1000">
                    <h2>Contact Info</h2>
                    <div class="book">
                        <div class="page1">
                            <i class="fa fa-map-marker" aria-hidden="true"></i><span>Address</span>
                        </div>
                        <div class="page2">
                            4671 Sugar Camp Road <br>
                            Owatonna,Minnesota <br>
                            55060
                        </div>
                    </div>
                    <div class="book">
                        <div class="page1">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i><span>Email</span>
                        </div>
                        <div class="page2">
                            vraj71764@gmail.com
                        </div>
                    </div>
                    <div class="book">
                        <div class="page1">
                            <i class="fa fa-phone" aria-hidden="true"></i><span>Phone</span>
                        </div>
                        <div class="page2">
                            506-567-6785
                        </div>
                    </div>
                </div>
                <div class="box2 box">
                    <form >
                        <h2>Message me</h2>
                        <input type="text" class="name" placeholder="Full Name">
                        <input type="email" class="email" placeholder="Email">
                        <input type="text" class="message" placeholder="Your Messsage">
                        <button type="submit" class="btn">Send</button>

                    </form>
                </div>
            </div>
        </section>
        <!------!contact us section--------->



        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
        <script>
            var menu = document.querySelector('.menu');
            var bg = document.querySelector('.bg');

            menu.addEventListener('click',function(){
                bg.classList.toggle('active');
                menu.classList.toggle('active');
            })
        </script>
        <script>
            var nav = document.querySelector('.nav');
            window.addEventListener('scroll',function(){
                nav.classList.toggle('sticky',window.scrollY>0);
            })
        </script>
        <script>
            window.addEventListener('scroll',function(){
                var scroll = document.querySelector('.fa');
                scroll.classList.toggle("active",window.scrollY>500)
            })
            function scrollToTop(){
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            }
        </script>
    </body>


  
    
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merienda One', cursive;
}
html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body{
    position:relative;
    height:auto;
    width:100%;
    overflow-x:hidden ;
}
.sec1{
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(https://images.unsplash.com/photo-1504326008149-71dbc00aa3ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.sec1 .fa{
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    bottom:700px;
    right:40px;
    height:50px;
    width:50px;
    background:red;
    border-radius:50%;
    color:#fff;
    box-shadow:10px 10px 10px rgba(0,0,0,.5);
    background-position:center;
    background-repeat:no-repeat;
    visibility:hidden;
    opacity:0;
    font-size:3rem;
    /*cursor:pointer;*/
    transition:.3s;
    z-index:3000;


}
.sec1 .fa.active{
    visibility:visible;
    opacity:1;
    bottom:40px;
}

.bg{
    position: fixed;
    top: 0;
    left: -140%;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skew(-20deg);
    transition: .5s;
    box-shadow: 0 0 20rem #000;
}
.bg.active{
    left: -40%;
}
.bg .navigation{
    position: relative;
    transform: translateX(13rem) translateY(-5rem);
}
.bg .navigation ul{
    list-style-type: none;
}
.bg .navigation ul li{
    position: relative;
    margin: 3rem 0;
    transition: .5s;
}
.bg .navigation ul li a{
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 3rem;
    text-transform: uppercase;
    transition: .5s;
}
.bg .navigation ul li a:hover{
    color: rgb(102, 89, 216);
    transform: translateX(4rem);
}
.bg .navigation ul li:hover{
    transform: translateX(4rem);
}
.nav{
    position: fixed;
    top: 0;
width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 200;
    background: transparent;
    transition: .5s;
}
.nav.sticky{
    background:#8c7ae6;
    padding:2rem;
    box-shadow: 1rem 1rem 3rem #000;
}
.nav h2{
    color: #fff;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: .2rem;
}
.nav .navBar ul{
    display: flex;
}
.nav .navBar ul li{
    list-style: none;
    margin: 0 2rem;
}
.nav .navBar ul li a{
    color: #fff;
    text-decoration: none;
    font-size: 1.6rem;
}
.nav .menu{
    width: 6rem;
    height: 6rem;
    display: none;
    cursor: pointer;
    background: url(https://img.icons8.com/nolan/50/menu.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition:.3s ;
}
.nav .menu.active{
    background: url(https://img.icons8.com/ultraviolet/40/000000/close-window.png);
    width: 5rem;
    height: 5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.context{
    position: absolute;
    left: 10%;
    color: #fff;
    max-width: 60rem;
}
.context h2{
    font-size: 5rem;
    margin: 0;
}
.context h1{
    font-size: 8rem;
    margin: 0;
    padding: 0;
}
.context h4{
    font-size: 2rem;
    margin-bottom: 3rem;
}
.context a{
    background: rgb(72, 117, 241);
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 2rem;
    font-weight: 700;
}

/*about us section*/
.sec2{
position: relative;
height: auto;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background: rgb(214, 213, 213);
overflow: hidden;
overflow-x:hidden ;
padding: 4rem;


}
.sec2 .head{
    text-transform: uppercase;
    font-weight: 900;
    font-size: 4rem;
    color: rgb(72, 117, 241);
    box-shadow: 0 .5rem 1rem #777;
    padding: 2rem;
    background: #fff;
}
.sec2 .container{
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(230, 230, 230);
    flex-wrap: wrap;
    padding: 2rem;
    margin-top: 5rem;
}
.sec2 .container .content{
    max-width: 45%;
    height: 40rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background: #fff;
    padding: 2rem;
    margin: 2rem;
}
.sec2 .container .image1{
    max-width: 50%;
    height: 40rem;
}
.sec2 .container .image1 img{
    max-width: 100%;
    height: 100%;
}
.sec2 .container .content h2{
    font-size: 3rem;
}
.sec2 .container .content p{
    font-size: 1.5rem;
}
.sec2 .container .content p{
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
/*about us section finished*/

/*----our services section-----*/
.sec3{
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: #000;
    overflow: hidden;
    padding: 10rem;
}
.sec3 .head{
    color: #fff;
    font-size: 4rem;
    text-transform: uppercase;
}
.sec3 .info{
    color: #fff;
    font-size: 1.4rem;
}
.sec3 .container{
    position: relative;
    height: auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(40rem,1fr));
    grid-template-rows: minmax(10rem,auto);
    margin: 3rem;
    grid-auto-flow: dense;
    grid-gap: 1rem;
}
.sec3 .container .box{
    display: grid;
    place-items: center;
    text-align: center;
    color: #fff;
    background: #333;
    padding: 2rem;
    transition: .5s;
}
.sec3 .container .box:hover{
    background:rgb(72, 117, 241);
}
.sec3 .container .box img{
    filter:invert(1);
    width: 7rem;
}
.sec3 .container .box h2{
    margin: 1rem 0;
}
/*----!our services section-----*/


    /*----our latest work section-----*/
    .sec4{
        position: relative;
        height: auto;
        width: 100%;
        padding: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow:hidden ;
    }
    .sec4 .head{
        color:rgb(72, 117, 241) ;
        font-size: 5rem;
        text-transform: uppercase;
    }
    .sec4 .info{
        font-size: 1.5rem;
    }
    .sec4 .container{
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(50rem,1fr));
        grid-template-rows: minmax(40rem,auto);
        margin: 4rem;
        grid-auto-flow: dense;
        grid-gap: 2rem;
        margin-top: 5rem;
    }
    .sec4 .container .box{
        display: grid;
        place-items: center;
        overflow: hidden;
    }
    .sec4 .container .box img{
        width: 100%;
        transform: scale(1.2);
        transition: .5s;
    }
    .sec4 .container .box:hover img{
        transform: scale(1);
    }
    /*----!our latest work section-----*/

    /*-------our testimonial section---------*/
    .sec5{
        position: relative;
        height: auto;
        width: 100%;
        padding: 8rem;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        flex-direction: column;
        background: rgb(238, 238, 238);
        overflow:hidden ;
    }
    .sec5 .container{
        position: relative;
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 5rem;
        flex-wrap: wrap;
    }
    .sec5 .head{
        font-size: 5rem;
        text-transform: uppercase;
        color: rgb(72, 117, 241);
    }
    .sec5 .info{
        font-size: 1.5rem;
    }
    .sec5 .container .box{
        max-width: 45%;
        margin: 2rem;
        padding: 3rem 2rem;
        background:rgb(72, 117, 241)  ;
        font-size: 1.6rem;
        color: #fff;
    }
    .sec5 .container .box .lower{
        width: 100%;
        text-align: right;
        margin-top: 3rem;
    }

/*-------our testimonial section---------*/


/*------contact Me section-----------*/
.sec6{
    position: relative;
    height: auto;
    width: 100%;
    padding: 5rem;
    display: flex;
justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #000;
}
.sec6 .head{
    color: #fff;
    font-size: 5rem;
}
.sec6 .info{
    color: #fff;
    font-size: 1.4rem;
}
.sec6 .container{
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}
.sec6 .container .box{
    max-width: 50%;
    margin: 2rem;
    color: #fff;
}
.sec6 .container .box1 h2{
    font-size: 2rem;
}
.sec6 .container .box1 .book{
    margin: 2rem 0;
}
.sec6 .container .box1 .book .page1 i{
    color: rgb(126, 158, 247);
    font-size: 2rem;
    margin-right: 1rem;
}
.sec6 .container .box1 .book .page1 span{
    font-size: 2rem;
}
.sec6 .container .box1 .book .page2{
    text-align:center;
}
.sec6 .container .box2{
    width: 60rem;
}
.sec6 .container .box2 form{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.sec6 .container .box2 form input{
    width: 100%;
    height: 3rem;
    border: none;
    outline: none;
    background: none;
    background: #333;
    margin: 1rem;
    text-align: center;
    color: #777;
}
.sec6 .container .box2 form .message{
    height: 10rem;
}
.sec6 .container .box2 form button{
    background: none;
    outline: none;
    border: none;
    background:rgb(95, 121, 238);
    color: #fff;
    padding: 2rem 3rem;
}
.sec6 .container .box2 form h2{
    font-size: 2rem;
}
/*------!contact Me section-----------*/

/*-----media query works here------*/
@media(max-width:991px){
    html{
        font-size: 55%;
    }
    .sec2 .container .content {
        max-width: 80%;
    }
    .sec2 .container .image1 {
        max-width: 100%;
    }
    .sec5 .container .box {
        max-width: 80%;
    }
    .sec3 .container{
        grid-template-columns: repeat(auto-fill,minmax(50%,1fr));
        grid-template-rows: minmax(auto,auto);
    }
    .sec4 .container{
        grid-template-columns: repeat(auto-fill,minmax(50%,1fr));
        grid-template-rows: minmax(auto,auto);
    }
    .sec2 .container .content {
        margin: 2rem 0;
        max-width: 50%;
    }
}
@media(max-width:768px){
    html{
        font-size: 45%;
    }
}
@media(max-width:650px){
    html{
        font-size: 45%;
    }
    .nav .menu{
        display: inline-block;
    }
    .nav .navBar ul {
        display: none;
    }
    .sec6 .container {
        flex-direction: column;
    }
    .sec6 .container .box {
        max-width: 100%;
    }
    .sec2 .container .content {
        max-width: 100%;
    }
    .sec5 .container {
        width: 100%;
    }
    .sec4 .head {
        font-size: 4rem;
    }
    .sec2 .container {
        width: 100%;
    }
    .sec2 .container .content {
        margin: 2rem 0;
    }
    .sec5 {
        padding: 2rem;
    }
    .sec4 .head {
        font-size: 3.5rem;
    }
    .nav.sticky {
        width: 95%;
    }
    .sec3 {
        padding: 1rem;
    }
}




</style>


<script>

<!------------JS------------->


</script>



  
</html>`);

}).listen(8080);