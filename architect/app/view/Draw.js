// Draw
Ext.define('OnDraw.view.Draw', {
	extend : 'Ext.Panel',
	xtype : 'Draw',

	config : {
         id: 'CanvasView',
         layout: 'card',
         items: [
             {
                 xtype: 'toolbar',
                 docked: 'top',
                 height: 40,
                 id: 'TopToolbar',
                 ui: 'neutral',
                 title: '',
                 layout: {
                     align: 'center',
                     pack: 'center',
                     type: 'hbox'
                 },
                 items: [
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ToolPen',
                         ui: 'plain',
                         width: '40px',
                         icon: '',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ToolEraser',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         id: 'RoomNum',
                         padding: '',
                         ui: 'plain',
                         iconAlign: 'center',
                         iconMask: true,
                         text: '102525'
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ToolNew',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ToolSetting',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     }
                 ]
             },
             {
                 xtype: 'toolbar',
                 docked: 'bottom',
                 height: 40,
                 id: 'BottomToolbar',
                 ui: 'neutral',
                 layout: {
                     align: 'center',
                     pack: 'center',
                     type: 'hbox'
                 },
                 items: [
                     {
                         xtype: 'button',
                         height: 40,
                         id: 'ColorRed',
                         ui: 'plain',
                         width: '40px',
                         icon: '',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ColorBlue',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ColorYellow',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         id: 'ColorGreen',
                         minHeight: '40px',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ColorBlack',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     },
                     {
                         xtype: 'button',
                         height: '40px',
                         id: 'ColorGray',
                         ui: 'plain',
                         width: '40px',
                         iconAlign: 'center',
                         iconMask: true
                     }
                 ]
             },
             {
                 xtype: 'panel',
                 html: '<canvas id="mycanvas" width="640" height="960" style="width:100%; height:100%;" onmouseleave="javascript:alert("kkk");"></canvas>',
                 id: 'CanvasPanel',
                 scope: 'this',
                 style: 'background-color: white',
                 layout: {
                     type: 'card'
                 },
                 listeners: {
                 	initialize: function() {
                 		server.on('line', function(data) {
                 			context.beginPath();
                 			
//                 			context.lineWidth = lineWidth;
//                 			context.strokeStyle = strokeStyle;
//                 			context.moveTo(oldPoint.cx(), oldPoint.cy());
//                 			context.lineTo(newPoint.cx(), newPoint.cy());
                 			
                 			context.lineWidth = data.width;
                 			context.strokeStyle = data.color;
                 			context.moveTo(data.x1, data.y1);
                 			context.lineTo(data.x2, data.y2);
                 				
                 			context.stroke();
                     	});
                 	},
                 	// panel painting
                 	painted: function() {
                 		canvas = document.getElementById('mycanvas'); 
                 		context = canvas.getContext("2d");
                 		
                     	var start = function(event, out) {
/*                             		event.preventDefault(); */
                     		if (!isDraw) {
                     			isDraw = true;
                     			if (out == 'mouse') {
                         			oldPoint = Ext.create('Point', {
                         				x: event.offsetX,
                         				y: event.offsetY,
                         				current_width: window.document.body.clientWidth,
                         				current_height: window.document.body.clientHeight-80
                         			});
                     			} else if (out == 'touch') {
                     				oldPoint = Ext.create('Point', {
                         				x: event.touches[0].pageX,
                         				y: event.touches[0].pageY-40,
                         				current_width: window.document.body.clientWidth,
                         				current_height: window.document.body.clientHeight
                         			});
                     			}
                     		}
                     	};
                     	var move = function(event, out) {
/*                             		console.log('move'); */
/*                             		event.preventDefault(); */
                     		if (isDraw) {
                     			if (out == 'mouse') {
                         			newPoint = Ext.create('Point', {
                         				x: event.offsetX,
                         				y: event.offsetY,
                         				current_width: window.document.body.clientWidth,
                         				current_height: window.document.body.clientHeight-80
                         			});
                     			} else if (out == 'touch') {
                     				newPoint = Ext.create('Point', {
                         				x: event.touches[0].pageX,
                         				y: event.touches[0].pageY-40,
                         				current_width: window.document.body.clientWidth,
                         				current_height: window.document.body.clientHeight
                         			});
                     			}
                     			server.emit('draw', {
                     				width: lineWidth,
                     				color: strokeStyle,
                     				x1: oldPoint.cx(),
                     				y1: oldPoint.cy(),
                     				x2: newPoint.cx(),
                     				y2: newPoint.cy()
                     			});
                     			oldPoint = newPoint;
                     		}
                     	};
                     	
                     	// mouse event
                     	canvas.addEventListener("mousedown" ,function(event){
                     		start(event, 'mouse');
                     	});
                     	canvas.addEventListener("mousemove" ,function(event){
                     		move(event, 'mouse');
                     	});
                     	canvas.addEventListener("mouseup" ,function(event){
                     		isDraw = false;
                     	});
                     	
                     	// touch event
                     	canvas.addEventListener("touchstart" ,function(event){
                     		console.log('touch S');
                     		start(event, 'touch');
                     	});
                     	canvas.addEventListener("touchmove" ,function(event){
                      		console.log('touch M');
                     		move(event, 'touch');
                     	});
                     	canvas.addEventListener("touchend" ,function(event){
                     		isDraw = false;
                     	});
                     	
                     	// extend event
                     	canvas.addEventListener("MouseEnter" ,function(event){
                     		console.log('enter');
                     		isDraw = false;
                     	});
                     	canvas.addEventListener("MouseLeave" ,function(event){
                     		console.log('leave');
                     		isDraw = false;
                     	});
                     	
                     } // end painted
                 } // end listeners
             }
         ]
	}
});