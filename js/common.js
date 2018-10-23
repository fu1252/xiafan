$(function(){
	$hover.init();
})
$hover={
	init:function(){
		$('IMG.hoverimg')
		  .bind('mouseover',this.enter)
		  .bind('mouseout',this.exit)
		  .each(this.preload)
	},
	preload: function() {
		this.preloaded = new Image;
		this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},
	enter:function(){
		this.src=this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},
	exit:function(){
		this.src=this.src.replace(/^(.+)_ov(\.[a-z]+)$/, "$1$2")
	},
};