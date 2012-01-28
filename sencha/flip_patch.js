Ext.apply(Ext.anims, {

	flip : new Ext.Anim({
		is3d : true,
		direction : 'left',
		before : function(el) {
			var rotateProp = 'Y', fromScale = 1, toScale = 1, fromRotate = 0, toRotate = 0;

			if(this.out) {
				toRotate = -180;
				toScale = 0.8;
			} else {
				fromRotate = 180;
				fromScale = 0.8;
			}

			// if (this.direction == 'up' || this.direction == 'down') {
			//     rotateProp = 'X';
			// }
			// if (this.direction == 'right' || this.direction == 'left') {
			//     toRotate *= -1;
			//     fromRotate *= -1;
			// }

			if(this.direction == 'up') {
				rotateProp = 'X';
			} else if(this.direction == 'down') {
				rotateProp = 'X';
				toRotate *= -1;
				fromRotate *= -1;
			} else if(this.direction == 'right') {
				toRotate *= -1;
				fromRotate *= -1;
			}

			this.from = {
				'-webkit-transform' : 'rotate' + rotateProp + '(' + fromRotate + 'deg) scale(' + fromScale + ')',
				'-webkit-backface-visibility' : 'hidden'
			};
			this.to = {
				'-webkit-transform' : 'rotate' + rotateProp + '(' + toRotate + 'deg) scale(' + toScale + ')',
				'-webkit-backface-visibility' : 'hidden'
			};
		}
	}),

});
