let hamburger = document.querySelector('.nav-for-mobile')
let popUP = document.querySelector('.pop-off-menu')
let header = document.querySelector('header');
let logoDark = document.querySelector('.logo')
let logoLight = document.querySelector('.logo-light')
let headerBackground = 
document.querySelector('.darkback')
let icon = document.getElementById('icon')
let iconMobile = document.getElementById('iconMobile')
let span = this.document.querySelectorAll(".spans")

hamburger.addEventListener('click',()=>{
    //Hamburger menu making cross
    if(hamburger.classList.contains('rolled-hamburger')){
        hamburger.classList.add('nav-for-mobile')
        hamburger.classList.remove('rolled-hamburger')
        // Pop up and pop off the menu on mobile
        popUP.classList.remove('pop-up-menu')
        popUP.classList.add('pop-off-menu')
        // Set dark Background
        headerBackground.style.display="none"
    }else{
        hamburger.classList.remove('nav-for-mobile')
        hamburger.classList.add('rolled-hamburger')
        popUP.classList.add('pop-up-menu')
        popUP.classList.remove('pop-off-menu')
        headerBackground.style.display="block"
    }
})

//scroll toggle and changing themes

window.addEventListener('scroll' , function(){
    if(this.window.scrollY == 0){
        logoDark.style.display = "none"
        logoLight.style.display = "block"
    }
    else{
        
        if(document.body.classList.contains("dark-theme")){
            logoDark.style.display = "none"
            logoLight.style.display = "block"  
        }else{
            logoDark.style.display = "block"
            logoLight.style.display = "none" 
        }
        
    }
    header.classList.toggle("sticky" , window.scrollY > 0)
     
})
// desktop dark theme
icon.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src="./images/pepe-nani.png";
                
            }else{
                icon.src="./images/pepe-sleep.png"
                
            }
})

// mobile dark theme
iconMobile.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                iconMobile.src="../images/pepe-nani.png";
                logoDark.style.display = "none"
                logoLight.style.display = "block"
                for(let i = 0;i<span.length;i++){
                    span[i].style.backgroundColor = "white"  
                }     
                
            }else{
                iconMobile.src="../images/pepe-sleep.png"
                if(this.window.scrollY === 0 && 
                    document.body.classList.contains("dark-theme")){
                     
                    for(let i = 0;i<span.length;i++){
                        span[i].style.backgroundColor = "white"  
                    }
                        
                }else{
                    if(scrollY === 0){
                        for(let i = 0;i<span.length;i++){
                            span[i].style.backgroundColor = "white"  
                        }        
                    }
                    else{
                        for(let i = 0;i<span.length;i++){
                            span[i].style.backgroundColor = "black"  
                        
                    }
                
                }
            } 
            }
})  
