

console.log('app running...')


function addText() {
  var input = document.getElementById('something');
  input.value = input.value + ' test'
}

// var img = new Image()
// //img.src= 'https://i.ytimg.com/vi/qAbHMwzGfPc/maxresdefault.jpg'
// img.src= 
// document.body.background = img.src


let loadFile = function(e) {
let output = document.getElementById('output');
output.src = URL.createObjectURL(e.target.files[0]);
output.onload = function() {
URL.revokeObjectURL(output.src) 
}
};
let loadPost = function(e){
let output = document.getElementById('output');





}
let loadFile2 = function(e) {
  let output2 = document.getElementById('output2');
  output2.src = URL.createObjectURL(e.target.files[0]);
  output2.onload = function() {
  URL.revokeObjectURL(output2.src) 
  }
  };
  let loadPost2 = function(e){
  let output2 = document.getElementById('output2');
  
  }
//         window.addEventListener('load', function () {
//   init131();
// });


// function init131() {}



   // const container = document.getElementById("toggleAddPostView");
      
      // container.addEventListener('onclick', function(){
      //         this.classList.remove('first');
      //         this.classList.add('second');
      // })
      // container.addEventListener('onClick', function(){
      //         this.classList.add('first');
      //         this.classList.remove('second');
      // })
      function toggleContent() {
        // Get the DOM reference
        let contentId1 = document.getElementById("add-profile");
        // Toggle 
        contentId1.style.display == "block" ? contentId1.style.display = "none" : 
        contentId1.style.display = "block"; 

        }



        function updateProfile() {
          // Get the DOM reference
 
          var contentId2 = document.getElementById("update-profile");
          // Toggle 
          contentId2.style.display == "block" ? contentId2.style.display = "none" : 
          contentId2.style.display = "block"; 


          
          }

          

          function toggleFeedView() {
            // Get the DOM reference
   
            var contentId3 = document.getElementById("feed");
            // Toggle 

            contentId2.style.display == "flex" ? contentId2.style.display = "none" : 
            contentId2.style.display = "flex"; 
            
            }
            

            function photoWall() {
              // Get the DOM reference
     

                 
            let feed = document.getElementById("feed");
            let photoWall = document.getElementById("photo-wall");
            // Toggle 
            photoWall.style.display == "none" ? (photoWall.style.display = "flex") && (feed.style.display = "none") : 
            (photoWall.style.display = "none") && (feed.style.display = "flex") ; 

            }

              
            function myProfile() {
              // Get the DOM reference
     
              let feed = document.getElementById("feed");
              let myProfile = document.getElementById("my-profile")
              // Toggle 
              myProfile.style.display == "none" ? (myProfile.style.display = "flex") && (feed.style.display = "none") : 
              (myProfile.style.display = "none") && (feed.style.display = "flex") ; 

              }
              function showFeed() {
                // Get the DOM reference
       
                let feed = document.getElementById("show-feed");
                //let myProfile = document.body
                // Toggle 
                feed.style.display == "none" ? (feed.style.display = "flex") : (feed.style.display = "none") ; 
                
  
                }

                function selectTheme() {
                  // Get the DOM reference
         
                  let feed = document.getElementById("feed");
                  let myProfile = document.getElementById("my-theme")
                  // Toggle 
                  myProfile.style.display == "none" ? (myProfile.style.display = "flex") : 
                  (myProfile.style.display = "none") && (feed.style.display = "flex") ; 
                  
    
                  }


              function myChat() {
                // Get the DOM reference
       
                let feed = document.getElementById("feed");
                let myChat = document.getElementById("my-chat")
                // Toggle 
                myChat.style.display == "none" ? (myChat.style.display = "flex") && (feed.style.display = "none") : 
                (myChat.style.display = "none") && (feed.style.display = "flex") ; 
  
                }


        document.getElementById('phone' ,'phone1').addEventListener('input', function (e) {
          var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
          e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });

        
        function toggleContent1() {
          
          let singleUser = document.querySelectorAll("#img-single-user");
          
          for(let i = 0; i < singleUser.length; i++){ 
            singleUser[i].style.display == "none" ? singleUser[i].style.display = "block" : 
            singleUser[i].style.display = "none"; 
          }

          let multiUser = document.querySelectorAll("#img-multi-user");
          
          for(let i = 0; i < multiUser.length; i++){ 
          multiUser[i].style.display == "block" ? multiUser[i].style.display = "none" : 
          multiUser[i].style.display = "block"; 
          }
          }

        
        function toggleViews() {
        // Get the DOM reference
        var contentId = document.querySelector(".class");
        console.log(this.src)
        // Toggle 
        contentId.style.display == "block" ? contentId.style.display = "none" : 
        contentId.style.display = "block"; 
        }
        function minimize(){
        //document.getElementById('feed').style.cssText = "display:block;"
        //     var content = document.getElementById('feed')
        //document.getElementById('feed').style.opacity = '100 !important'
        //   content.style.display !== "block" ? content.style.display = "none" : 
        // // contentIstyle.display = "block"; 
        let feed = document.getElementById("feed");
        // Toggle 
        feed.style.display = "flex" 

        let myProfile = document.getElementById("my-profile");
        myProfile.style.display = "none"
        
        
        // var img = new Image()
        // img.src= 'https://source.unsplash.com/random/900×700/?flowers?random=1'
        // document.body.background= img.src
        

        
        
        
        //  parent.element.style.display !== 'none' ?   parent.element.style.display = 'none' :   parent.element.style.display = 'inline'
        
        //document.getElementById('feed').removeAttribute("style");
        //  document.querySelectorAll('#img').style.display= 'block'
        
        //document.getElementById('feed').style.display= 'none'
        
        //  var try2 = document.getElementById('feed')
        //  try2.style.cssText = "display:block;"
        //      try2.style.display !== 'none' ? try2.style.display = 'none' : try2.style.display = 'block'
        //      document.getElementById('feed').style.display= 'block'
        
        }
        
        // images = document.querySelectorAll('#img-multi-user, #img-single-user')
        // console.log(images)
        
        // for (var i = 0 ; i < images.length; i++) {
        
        // var image = images[i];
        // image.addEventListener("click", func)
        // function func () {
        // console.log('start')
        // console.log(this.getAttribute("class"))
        // console.log(this.className)
        // console.log(this.id)
        // console.log(this.src)
        // img.src = this.src
        // //ocument.body.classList.add("mystyle")
        // //document.body.style.backgroundColor = 'red'
        // //document.getElementById('bgimg').style.backgroundImage = img.src
        // //
        
        
        // //$("#feed").css("display", "none")
        // document.body.background.style = img.src
        // document.getElementById(`${this.className}`).style.display = "block"
        
        
        // // var rect = image.getBoundingClientRect();
        // //image.style.cursor = "pointer";
        
        // document.getElementById('feed').style.cssText = "height: 100%"
        
        // }
        
        
        // }
        let showProfiles = document.querySelectorAll('img')
        for (const showProfile of showProfiles) {
          button.addEventListener('click', function(event) {
            console.log('click')
          })
        }
        // function showUser(){

 
        //   let feed = document.getElementById("feed");
        //       let myProfile = document.getElementById("show-user")
        //       // Toggle 
        //       myProfile.style.display == "none" ? (myProfile.style.display = "flex") && (feed.style.display = "none") : 
        //       (myProfile.style.display = "none") && (feed.style.display = "flex") ; 
        

              
              
        // }


        function myFunction() {
          document.getElementById("myDropdown").classList.toggle("show");
        }
        
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

        function returnText(){
          let input = document.getElementById("userInput").value;
          var img = new Image()
          document.body.background = ''
          
          img.src = ''
          document.body.background = img.src
          const x = Math.floor(Math.random() * 100)
          img.src= `https://source.unsplash.com/random/1600×1200/?${input}?random=${x}`
          document.body.background = img.src

          img.onload = function () {OnImageLoaded (this)};
          function OnImageLoaded (img) {

            let myTheme = document.getElementById("my-theme")
            // Toggle 
            myTheme.style.display == "block" ? (myTheme.style.display = "none") && (myTheme.style.display = "none") : 
            (myTheme.style.display = "none") && (myTheme.style.display = "none") ;
            
          }
      }
      document.getElementById('userInput').onkeydown = function(e){
        if(e.keyCode == 13){
          returnText()
        }
     };


