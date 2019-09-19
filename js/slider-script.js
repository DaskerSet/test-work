let vm1 = new Vue({
	el: "#slider",
	data: {
		pageWidth: 760
	},
	methods: {
		firstPage: function(){
			this.choosePage(0);
		},
		secondPage: function(){
			this.choosePage(1);
		},
		thirdPage: function(){
			this.choosePage(2);
		},
		choosePage: function(num){
			let sliderLine = document.getElementById("slider-line");
			sliderLine.style.transform = 'translateX(-' + this.pageWidth*num + 'px)';
			let square = document.querySelectorAll(".choice-square");
			for (var i = 0; i < square.length; i++) {
				square[i].style.background = 'none';
			}
			square[num].style.background = '#212121';
		}
	}
})
