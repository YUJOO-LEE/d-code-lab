function MyTab(el) {
  this.tab = document.querySelector(el);
  this.btns = this.tab.querySelectorAll("ul li"); 
  this.boxs = this.tab.querySelectorAll("article div"); 
  this.bindingEvent();
}

MyTab.prototype.bindingEvent = function() {
  this.btns.forEach(function(btn,index){
    btn.addEventListener("click", function(e){
      e.preventDefault(); 
  
      this.activation(this.btns, index); 
      this.activation(this.boxs, index); 
    }.bind(this))
  }.bind(this))
}

MyTab.prototype.activation = function(arr, index) {
	for(var el of arr){
		el.classList.remove("on"); 
	}
	arr[index].classList.add("on"); 
}