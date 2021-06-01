

console.log('app running...')


function addText() {
  var input = document.getElementById('something');
  input.value = input.value + ' test'
}

var img = new Image()
//img.src= 'https://i.ytimg.com/vi/qAbHMwzGfPc/maxresdefault.jpg'
img.src= 'https://source.unsplash.com/random/900×700/?mountains?random=1'
document.body.background = img.src


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
        var contentId = document.getElementById("toggle-view-element");
        // Toggle 
        contentId.style.display == "block" ? contentId.style.display = "none" : 
        contentId.style.display = "block"; 
        document.querySelectorAll('#img').onclick = dosomething
        
        function dosomething(){
        document.getElementById('feed').style.display= 'none'
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
        
        
        
        // var img = new Image()
        // img.src= 'https://source.unsplash.com/random/900×700/?flowers?random=1'
        // document.body.background= img.src
        
        this.parentNode.style.display = 'block'
        //document.getElementById('feed').setAttribute('style', 'width:0px')
        
        const minimize =  document.getElementsByClassName("container-view")
        
        
        
        document.body.style.cssText = "background-color: green !important;"
        document.body.style.backgroundColor = 'black'
        parent = minimize.parrentNode
        //  parent.element.style.display !== 'none' ?   parent.element.style.display = 'none' :   parent.element.style.display = 'inline'
        
        //document.getElementById('feed').removeAttribute("style");
        //  document.querySelectorAll('#img').style.display= 'block'
        
        //document.getElementById('feed').style.display= 'none'
        
        //  var try2 = document.getElementById('feed')
        //  try2.style.cssText = "display:block;"
        //      try2.style.display !== 'none' ? try2.style.display = 'none' : try2.style.display = 'block'
        //      document.getElementById('feed').style.display= 'block'
        
        }
        
        images = document.querySelectorAll('#img')
        console.log(images)
        
        for (var i = 0 ; i < images.length; i++) {
        
        var image = images[i];
        image.addEventListener("click", func)
        function func () {
        console.log('start')
        console.log(this.getAttribute("class"))
        console.log(this.className)
        console.log(this.id)
        console.log(this.src)
        img.src = this.src
        //ocument.body.classList.add("mystyle")
        //document.body.style.backgroundColor = 'red'
        //document.getElementById('bgimg').style.backgroundImage = img.src
        //
        
        
        //$("#feed").css("display", "none")
        document.body.background.style = img.src
        document.getElementById(`${this.className}`).style.display = "block"
        
        
        // var rect = image.getBoundingClientRect();
        //image.style.cursor = "pointer";
        
        document.getElementById('feed').style.cssText = "height: 100%"
        
        }
        
        
        }